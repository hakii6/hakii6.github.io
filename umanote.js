// [レーン変更速度]
// startCoef: スタート補正
// orderCoef: 順位補正
// unit: [CourseLane/s]
const moveLaneTargetSpeed = () => {
  let startCoef = 1;
  if (phase <= 1 && cornerPass === 0) {
    startCoef = 1.0 + 0.05 * (laneDist / courseLane);
  }

  let orderCoef = 1;
  if (phase >= 2) {
    orderCoef = 1.0 + 0.01 * order;
  }

  return 0.02 * ( 0.3 + 0.001 * power) * startCoef × orderCoef
};

// [レーン変更加速度]
// unit: courseLane
const moveLaneTargetAcc = () => {
  return 0.02 * 1.5;
};

const moveLaneSpeed = () => {
  let moveInCoef = 1;
  if (moveInLane) {
    moveInCoef = (1.0 + laneDist) * (-1);
  }
  return Math.max(Math.min(laneCurSpeed, 0), 0.6) * moveInCoef;
}

// 内側移動補正は内側に移動する時に発生する補正です。
// 内側移動補正 = -(1.0 + 現在レーン距離)
// 負数をかけることで、移動の方向が内側に変わります。
// 逆にこれまでの速度は全部絶対値で、方向とは関係ありません。方向を変更しても現在速度を落としません。

// 最後に、現在レーン距離に移動距離を加算して新たなレーン距離にします。
// 移動距離 = 実際速度 × 経過時間
// 移動する方向にブロックされているなら移動しません。
// そして目標レーンに到達したら現在速度がゼロにリセットされます。


// [視界]
const vision = () => 20;

const umaOnVision = () => {
  if (distDiff <= umaVision) {
    if (Math.abs(laneDistDiff) <= (11.5 * horseLane * distDiff / vision + 2 * horseLane) / 2) {
      return true;
    }
  }
  return false;
};

// [レーン距離] (0 ~ CourseLane) (tokyo 1.5)
// const laneDist = () => {
//   return
// };

const courseLane = () => CourseData.laneMax / 1000.0;

const horseLane = () => courseLane / 18;

const startLaneDist = () => (num - 1) * horseLane;;

const laneType = () => {
  const laneTypeArr = ['內', '中', '外', '大外']
  return laneTypeArr(Math.min(Math.ceil(laneDist - 0.001) / 0.2), 3);
};

const blockedFront = () => {
  if (distDiff < 2.0 && distDiff > 0) {
    if (Math.abs(laneDistDiff) <= (1.0 - 0.6 * distDiff / 2.0) * 0.75 * * horseLane) {
      return true;
    }
  }
  return false;
};

const blockedSide = () => {
  if (Math.abs(laneDistDiff < 2 * * horseLane) && Math.abs(distDiff < 1.05)) {
    return true;
  }
  return false;
};

const blockedAll = () => {
  if (blockedSide >= 1 && blockedFront >= 1) {
    return true;
  }
  return false;
};

const nearUma = () => {
  if (Math.abs(laneDistDiff < 1.5 * * horseLane) && Math.abs(distDiff < 1.5)) {
    return true;
  }
  return false;
};

const backUma = () => {
  if (Math.abs(laneDistDiff < 1 * * horseLane) && Math.abs(distDiff < 2.5)) {
    return true;
  }
  return false;
};

const isOvertakeTarget = () => {
  if (distDiff <= 20 && distDiff >= 1) {
    const umaDiffV = umaV - targetUmaV;
    if (umaDiffV >= 0) {
      if (distDiff / umaDiffV >= 15) {
        if (targetUma.blockedFront) {
          if (umaTargetV < targetUmaCurV) {
            return true;
          }
        } else {
          if (umaTargetV < targetUmaTargetV) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

// 既に追い越し対象であるウマ娘が視界から外されても、前述の判定に成功している限り追い越し対象で居続けます。
// そして前述の判定とは別で、前をブロックしているウマ娘は常に追い越し対象です。
// 追い越し対象の有無と、自分が追い越し対象かはスキルの発動条件にもなります。
// };





[追い越しモード（目標レーン）]
追い越し対象がいる時、追い越しモードが使われます。
序盤と中盤、最初のコーナー前200mの区間で追い越しモードを使うことはできません。
追い越し対象を全て失うと、追い越しモードを1.5秒続行した後、通常モードに切り替えます。

追い越しモードでの目標レーンは以下のように決められます：
まず一つの追い越し対象につき、その対象のいる馬群の内と外両端にいるウマを見つけます。
具体的に言うと、その対象から見て、以下の条件をクリアした内側のウマを探します。
0 < abs(横距離) < 2* horseLane
0 <= 前後距離 <= 3m

該当するウマがある場合、そのウマから更に内側に同じ条件を満たしているのウマを探し、内側に条件を満たすウマが居なくなるまで繰り返します。
最終的に辿り着いたウマを最も内側にいるウマとする。そして同じ手順と条件で最も外側にいるウマも見つけます。
ここまでの判定に視界は絡みません。

そして両端にいるウマから目標レーン候補を計算します。
目標レーン（内） = 内側ウマレーン距離 - 1* horseLane
目標レーン（外） = 外側ウマレーン距離 + 1* horseLane

その候補はレーン距離の最小、最大値を超えてない、そして視界に以下の条件を満たすウマがいないなら、候補リストの加えます。
自身距離 <= 距離 <= 内/外側ウマ距離 + 0.5m（ここの距離はスタートからの距離のこと）
目標レーン - 0.8* horseLane <= レーン距離 <= 目標レーン + 0.8* horseLane


追い越し対象と関係なしに、更に一つ目標レーン候補が有ります。
序盤か中盤、かつ内側が空いていて、かつ現在レーン距離 > 1* horseLaneなら、
目標レーン = 現在レーン距離 - 1* horseLane
それ以外なら
目標レーン = 現在レーン距離


視界に以下の条件を満たすウマがいないなら、この目標レーンが候補に加われます。
自身距離 <= 距離 <= 自身以外最後尾のウマ娘の距離 + 3m
目標レーン - 0.8* horseLane <= レーン距離 <= 目標レーン + 0.8* horseLane


ここにきって開き(Lane Space)の概念が出てきます。
開きとはその側で最も近くにいる、横ブロックの前後距離条件を満たしたウマ（横距離条件を満たしてなくても）との横距離の絶対値です。
該当するウマがいないなら、レーン距離の最大値、最小値から現在レーン距離を引く値の絶対値を使います。


目標レーン候補の中、その側がブロックされている、もしくは開きが移動距離より小さいのを全部破棄します。
残りの候補からスコアを計算し、一番低い（近い）のを採用します。
もし残りの候補がいないなら、現在レーン距離を候補として採用します。

スコア = abs((目標レーン - 現在レーン距離) * フェイズ係数 * スキル係数)
スキル係数は1.5 ですが、該当スキルはないため実際発生しません。
フェイズ係数は移動方向によって違います。
序盤：内 = 1.0　外 = 100.0
中盤：内 = 1.0　外 = 1.0
終盤、ラストスパート：内 = 1.0　外 = 1.15

採用された候補が最終直線レーン（通常モードを参照）より内の場合、最終直線レーン側でブロックされていない、かつ開きが移動距離より大きいなら、最終直線レーンが優先され目標レーンに設定されます。
それ以外の状況では採用された候補を目標レーンに設定します



[通常モード（目標レーン）]
追い越し対象がいない時、通常モードが使われます。
そして序盤と中盤、最初のコーナー前200mの区間も通常モードが使われます。

通常モードでの目標レーンは以下のように決められます：
HPが切れているなら、目標レーンは現在レーンに設定されます。
ポジションキープがペースダウンモードなら、目標レーンは0.18に設定されます。


最終直線で、最終直線レーンが外側にいる、かつ外側がブロックされてないなら、目標レーンは min(現在レーン + 0.05, 最終直線レーン) に設定されます。
最終直線レーンは最終直線に入る時点でのレーン距離によって決められます。
最終直線レーン = clamp(レーン距離 / 0.1, 0, 1) × 0.5 + random(0.1)


序盤と中盤、内側がブロックされていないなら、目標レーンは 現在レーン - 0.05 に設定されます。
中盤、内側がブロックされている、かつブロックしているウマ娘との横距離が1.75* horseLaneより少ないなら、目標レーンは min(現在レーン + 0.05, ブロックウマ娘レーン + 2* horseLane) に設定されます。


以上のどの条件も満たしていないなら、目標レーンは現在レーンに設定されます。

[目標レーン]
目標レーンの設定は、ウマ娘が現在の目標レーンとの距離が0.5* horseLane以下、もしくは目標レーン側でブロックされている時行います。
他にも強制的に目標レーンを新たに設定するトリガーが存在します。
直線のコースで目標レーンの変更が行いません。

目標レーンを決めるにはいくつかの目標レーン戦略が有ります。
レース中使われるのは通常モードと追い越しモードです。
他にもスキル効果によってレーンが固定されるモードが有りますが、該当するスキルはありません。


[内側移動補正(ForceInMove : targetSpeed)]
発生条件は直線レース以外、序盤、レーン距離 >= 0.12[CourseLane]、かつ内側が空いている。
内側移動補正 = random(0.1) + 脚質補正 [m/s]
乱数はウマ娘一人につきレース前に一回だけ振ります。
脚質補正は
逃げ: 0.02
先行: 0.01
差し: 0.01
追込: 0.03
