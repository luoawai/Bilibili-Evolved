export const toolTips = new Map<keyof BilibiliEvolvedSettings, string>([
    ["useDefaultPlayerLayout", /*html*/`デフォルト・プレーヤー・レイアウトを設定する. できるだけ、適切なページに設定（例えば、番組の放送ページに番組プレーヤーのレイアウトを設定する）、そうでない場合は効果がない可能性があります.
- 旧版: 伝統的なレイアウト
- 新版: 動画ページに黙認の新版レイアウト
注意: 伝統的なレイアウトでは、多くのスクリプト機能が適用されない.`],
    ["defaultPlayerLayout", /*html*/`動画プレーヤーのレイアウトを設定する.`],
    ["defaultBangumiLayout", /*html*/`番組プレーヤーのレイアウトを設定する.`],
    ["useDefaultPlayerMode", /*html*/`デフォルト・プレーヤー・モードが使用するかどうかを制御する、 例えば<span>常规</span>、<span>宽屏</span>、 <span>网页全屏</span>か<span>全屏</span>.`],
    ["defaultPlayerMode", /*html*/`デフォルト・プレーヤー・モードが設定する.`],
    ["applyPlayerModeOnPlay", /*html*/`再生時にモードを適用する、「いいえ」を選択すると、再生が開始されていないときに適用されます.`],
    ["autoLightOff", /*html*/`初回放送時には、自動的に消灯モードに入り、再生終了後に自動的に点灯します.`],
    ["useDefaultVideoQuality", /*html*/`動画を開くときに指定された画質を自動的に選択する. 映像の最高画質が選択された画質より低ければ、映像の最高画質を使用する.`],
    ["defaultVideoQuality", /*html*/`自動的に選択された映像画質を設定する.`],
    ["useDefaultDanmakuSettings", /*html*/`デフォルトで弾幕を開くかどうかを設定する.そして、「防挡字幕」と「智能防挡弹幕」を覚えておくかどうかを設定できる.`],
    ["enableDanmaku", /*html*/`弾幕がデフォルトで開くかどうかを制御する.`],
    ["rememberDanmakuSettings", /*html*/`弾幕ブロックの設定を覚えるかどうかを制御する、「防挡字幕」と「智能防挡弹幕」を含まれています.これらの設定を動画制御欄で変更すると、すべでの動画にデフォルトでこれらの設定が使用されます.`],
    ["expandDanmakuList", /*html*/`新版レイアウトでは、他のおすすめ動画が表示されるようにデフォルトで弾幕リストが折りたたまれています.この機能を有効にすると、動画が読み込まれるたびに弾幕リストが自動的に展開されます.`],
    ["expandDescription", /*html*/`長すぎる動画概要欄はデフォルトで折りたたまれています、この機能を有効にすると完全な動画概要欄が強制的に展開されます.`],
    ["autoContinue", /*html*/`動画再生時に視聴履歴が検出されると(<span>前回の见た...</span>情報)、自動的に対応する時間に再生される.`],
    ["allowJumpContinue", /*html*/`履歴のセット数が現在開いているページと矛盾している場合でも、自動的にジャンプします.`],
    ["autoPlay", /*html*/`動画ページに入ると、自動的に動画の再生が開始されます.`],
    ["skipChargeList", /*html*/`エンディングの「充电鸣谢」を自動スキップ.`],
    ["framePlayback", /*html*/`プレーヤーの時間に右側に2つのボタンが追加されました.動画の時間を細かく調整するために使用される. キーボードショートカットに対応します<kbd>Shift</kbd>+<kbd>←</kbd>/<kbd>→</kbd>. (伝統的なレイアウトでキーボードショートカットのみ使用でき、ボタンは表示されません)`],
    ["videoScreenshot", /*html*/`プレーヤーの時間に右側に1つのボタンが追加されました.動画スクリーンショットを使用されます. キーボードショートカットに対応します<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>C</kbd>. (伝統的なレイアウトでキーボードショートカットのみ使用でき、ボタンは表示されません)`],
    ["playerFocus", /*html*/`動画/番組の放送ページに入る時、プレーヤーに自動的に移動する.`],
    ["playerFocusOffset", /*html*/`移動時の垂直オフセット、単位はピクセル(px).`],
    ["outerWatchlater", /*html*/`動画放送ページの<span>稍后再看</span>を外に移動します.`],
    ['keymap', /*html*/`動画プレーヤーのためにより多くのショートカットを有効にします:
- <kbd>w</kbd> ウェブの全画面
- <kbd>t</kbd> ワイドモード
- <kbd>r</kbd> サイクル放送
- <kbd>m</kbd> 消音
- <kbd>d</kbd> 弾幕スイッチ
- <kbd>l</kbd> いいね
- <kbd>c</kbd> コインを投げる
- <kbd>s</kbd> お気に入り
- <kbd>Shift + w</kbd> 後で見る
- <kbd>Shift + ↑/↓</kbd> / <kbd>Shift + ,/.</kbd> 再生速度を調整する
- <kbd>Shift + /</kbd> 再生速度をリセットする`],
    ['doubleClickFullscreen', /*html*/`ダブルクリックして全画面に切り替えることができます.ご注意ください<span>播放器触摸支持</span> - <span>启用双击控制</span>と共に使用できない.`],
    ["customStyleColor", /*html*/`頂欄(スタイルの調整が有効な場合）とダークテーマのテーマ色で埋める、カラープレビューサークルをクリックして、设定の16種類のテーマカラーにできるの、右側のテキストボックスに任意の有効な16進数のカラー値を直接入力することもできます.(<span>#rrggbb</span>或<span>#rgb</span>).`],
    ["blurBackgroundOpacity", `设置顶栏对横幅的透明度(0~1), 数值越高顶栏越淡, 当横幅关闭时此选项无效.`],
    ["customNavbar", /*html*/`カスタム頂欄を使用する.伝統的な頂欄に取って代わる.メインステーション専用です.「生放送」、「アルバム」、「会員購」などには影響しません.`],
    ["customNavbarFill", /*html*/`テーマ色で頂欄を埋める.`],
    ["allNavbarFill", /*html*/`テーマ色で他の頂欄を埋める.「生放送」、「アルバム」、「会員購」などが含まれています.`],
    ["customNavbarShadow", /*html*/`頂欄に投影効果を追加する.`],
    ["customNavbarCompact", /*html*/`トップページにコンパクトなレイアウトを使する.コンパクトなレイアウトはより小さなスペースを使用し、そして動画のタイトルが長すぎる場合に後者の部分を省略するための 「...」を使用する.`],
    ["customNavbarBlur", /*html*/`トップの横断幕が存在する場合は、背景のぼかし効果を使用します.`],
    ["useDarkStyle", /*html*/`ダークテーマでは、ページの明るい部分が暗い色に変わり、夜間の視聴に最適な表示になります.そして多くのテーマカラーを適用します.ぜひお試しください.`],
    ["darkSchedule", /*html*/`ダークテーマを使用して计画タイムを設定する.この期間を開始または終了すると、ダークテーマは自動的にオンまたはオフになり、終了時刻は開始時刻より短く、翌日と見なされます.例えば<span>18:00</span>から<span>6:00</span>夜の18：00から翌日の6：00までを表しています.`],
    ["darkScheduleStart", /*html*/`計画期間の開始時刻を設定する.`],
    ["darkScheduleEnd", /*html*/`計画期間の終了時刻を設定する.`],
    ["compactLayout", /*html*/`ホームページでコンパクトレイアウトを使用するかどうかを設定します.動画の間隔が狭くなり、フィレットが切り取られ、カテゴリ欄のアイコンは高解像度版を使用します.`],
    ["useCommentStyle", /*html*/`- 人気コメントのアバターの下にある「フォロー」ボタンを削除します
- ユーザーの「レベル」アイコンの削除します
- 発送端末の情報を削除(例えば<span>来自安卓客户端</span>)
- 送信時刻は右上に移動します
- ビットアイコンはすべてベクトルアイコンを入れ替えており、高解像度の画面はぼやけません．
注釈:「フォロー」と「レベル」アイコンはマウスでアバタ上に置くことで，ポップアップした資料カードに表示することができる.`],
    ["simplifyLiveroom", /*html*/`- 「老爷」アイコンを隠す
- 「ファン勲章」アイコンを隠す
- 「活動肩書き」アイコンを隠す
- 「レベル」アイコンを隠す
- 「艦長」アイコンを隠す
- 「全域放送」を隠す
- 「ウェルカムメッセージ」を隠す (例えば、「xxx老爷进入直播间」)
- 「ギフト弾幕」を隠す (弾幕リストのみ. 例えば「节奏风暴」など特殊効果は影響を受けません)
- 「艦長購入のヒント」を隠す (弾幕リストの「xxxは艦長を購入する」)
- 「抽選のヒント」を隠す (例えば、「艦長」を購入する時、「小飞船」を購入する時、ギフトを抽選のヒント)
- 配信ルームの「特殊な背景」を無効にする（ダークテーマでは、デフォルトでは「特殊な背景」も無効になっています）
各項目は、非表示にするかどうかを<span>附加功能</span>の中で個別に選択することができる.`],
    ["preserveRank", `控制是否在搜索框左侧显示排行榜图标.`],
    ["hideBanner", /*html*/`トップページの横断幕を非表示.`],
    ["playerShadow", /*html*/`プレーヤーにテーマカラーの投影の追加する.`],
    ["narrowDanmaku", /*html*/`ウェブの全画面表示されている場合は、幅が狭すぎても弾幕欄を強制的に保持し.この場合には右側の機能ボタンが境界線を押し出してしまう可能性があることに注意する.`],
    ["blurVideoControl", /*html*/`動画制御欄の背景をぼかします.伝統的な陰影効果は無効になります.`],
    ["customControlBackground", /*html*/`動画制御欄に半透明な黒を付ける、伝統的な陰影効果を置き換える.`],
    ["customControlBackgroundOpacity", /*html*/`制御欄に黒の不透明度（0～1）を設定し、数値が大きくなるほど黒が濃くなるように設定します.`],
    ["harunaScale", /*html*/`スクリーンDPIによって、配信ルームの看板娘のサイズをスケーリングして、ピクセルの解像度を高めます.`],
    ["removeLiveWatermark", /*html*/`生放送時、隅の透かしを削除する.`],
    ["removeVideoTopMask", /*html*/`マウスが通過したら、動画の右上隅にあるタイトル層を削除します.`],
    ["hideOldEntry", /*html*/`放送ページの右側<span>返回旧版</span>を隠す.`],
    ["hideBangumiReviews", /*html*/`番組ページの採点区を隠す.`],
    ['hideCategory', /*html*/`ホームページのエリア欄を隠す、それでもエリア欄は頂欄のホームメニューからアクセスできます.`],
    ["removeAds", /*html*/`ビリビリのさまざまな広告を削除する.ホームページのプロモーションモジュール、モバイルアプリのおすすめ、動画ページの右側にある広告などが含まれます.`],
    ["watchLaterRedirect", /*html*/`「後で見る」のリンクを通常の再生ページに変更して、新版レイアウトの再生ページを使用する.`],
    ["favoritesRedirect", /*html*/`個人センターの「お気に入り」の動画を通常の再生ページに変更して、「お気に入り」再生の放送ページではなく.`],
    ["hideTopSearch", /*html*/`検索欄の推薦語を<span>搜索</span>に置き換える.`],
    ["fullTweetsTitle", /*html*/`頂欄の情報プレビューページでは、常に完全なタイトルが展開されます.`],
    ["fullPageTitle", /*html*/`動画選集一覧では、常に完全なタイトルが展開されます.`],
    ["showDeadVideoTitle", /*html*/`個人センターの中に、失効した動画のタイトルとサムネイルを復元する.`],
    ["useBiliplusRedirect", /*html*/`失効した動画のリンクを「BiliPlus」ページに変更して.`],
    ["deadVideoTitleProvider", /*html*/`失効した動画の情報源: 「後で見る」は安定していますが、少し時間がかかります; 「BiliPlus」のスピードは速いですが、書き残していますので、しばらく開けません.`],
    ["biliplusRedirect", /*html*/`動画、番組、個人センターページで、追加機能<span>转到BiliPlus</span>をクリックして、BiliPlusの対応するページに移動します.`],
    ["imageResolution", /*html*/`スクリーンDPIによって、より高い解像度の画像を読み込む.（例えば、スクリーンのDPIが200％に調整されている場合、解像度は2倍になり、読み込み時間は長くなります.)`],
    ["oldTweets", /*html*/`「新版レイアウトの情報」リンクを 「旧版レイアウトの情報」に置き換え、追加機能で 「新版レイアウトの情報」/「旧版レイアウトの情報」を切り替えます.`],
    ["i18n", /*html*/`インタフェースの一般的なテキストの翻訳を提供する.`],
    ["i18nLanguage", /*html*/`翻訳言語`],
    ['noLiveAutoplay', /*html*/`生放送のホームページのおすすめライブルームで自動的に再生を開始することは禁止されています.`],
    ['hideHomeLive', /*html*/`生放送のホームページのおすすめライブルームを隠す.`],
    ['foldComment', /*html*/`情報ページにコメントを表示しているときに下部に「コメントを閉じる」ボタンを追加します.`],
    ['seedsToCoins', /*html*/`追加機能に<span>瓜子换硬币</span>ボタンを追加し、クリックして1日に1回に制限されて、1コインに700銀ヒマワリの種を交換してください.`],
    ["touchNavBar", /*html*/`頂欄の右側の1級リンクを削除します(<span>大会員</span>から<span>履歴</span>まで).タッチスクリーンデバイスですばやく情報を便利にします.削除されたリンクページはそれぞれのプレビューの中から<span>查看更多</span>に入ることができます.`],
    ["comboLike", /*html*/`「おすすめ三連」（「いいね」を長押した）のタッチサポートを有効にする.`],
    ["touchVideoPlayer", /*html*/`制御欄のボタン間隔を大きくして、タッチ操作をより正確にする.プレーヤーのタッチサポートを有効にする:
- 左右にスワイプして再生の進行状況を調整します
- 上下にスワイプして音量を調整します
- 進行状況の調整は左上と右上でキャンセルできます
- 異なる位置にスワイプすると、3つの異なる感度を使用できます.`],
    ["touchVideoPlayerAnimation", /*html*/`タッチ調整のヒントボックスにアニメーションの表示と非表示のどうかを決定します.このアニメーションはフレームがドロップされる可能性があります.`],
    ["touchVideoPlayerDoubleTapControl", /*html*/`操作方法を変更する.クリック:制御欄を表示/非表示, ダブルクリック放送/一時停止.`],
    ["toast", /*html*/`ウェブページの左下隅に表示スクリプトからのメッセージ、例えば更新通知の送信、エラーメッセージなどです.`],
    ["toastInternalError", /*html*/`オープンしたら、エラーメッセージは詳細な技術的エラー情報とスタック追跡を表示します.これは通常問題発生の原因を正確に確定するために使用されます.だから、問題を報告する時にこれらの情報はとても役に立ちます.`],
    ["useCache", /*html*/`スクリプトの読み込み速度を上げるためにキャッシュを使う.`],
    ["filenameFormat", /*html*/`ファイルの命名形式をカスタマイズする、<span>下载弹幕</span>、<span>下载视频</span>、<span>视频截图</span>、<span>查看封面</span>に作用する.
使用できる変数は:
- <span>title</span>: 動画のタイトル/配信ルームのタイトル
- <span>ep</span>: エピソードタイトル
- <span>aid</span>: AV番号 (動画アドレス番号)
- <span>cid</span>: CID (動画の唯一の番号、動画アドレス番号に対応するの動画アドレスは複数の動画を含み得る)
- <span>lid</span>: 配信ルーム番号
- <span>y</span>/<span>M</span>/<span>d</span>: 年/月/日
- <span>h</span>/<span>m</span>/<span>s</span>/<span>ms</span>: 時間/分/秒/ミリ秒

デフォルトの命名形式は<span>[title][ - ep]</span>、動画のタイトル+エピソードタイトル、エピソードタイトルがない場合は動画のタイトルを表示する.

変数は角括弧内に配置され、角括弧内のその他の内容は変数が有効な場合に表示されます. 例えば、命名形式が<span>[title] - [ep]</span>書かれている場合ではエピソードタイトルがなくても、この<span> - </span>ファイル名にも表示されます. デフォルトとして角括弧で囲まれている場合、エピソードタイトルがない、<span> - </span>が表示されません.

例えば、タイトル＋AV番号＋時間の命名形式が欲しい、<span>[title][ AVaid] [y]-[M]-[d] [h]-[m]-[s]</span>に設定することができます. <span>xxxx AV23333 2019-06-1 22-22-22</span>ような名前をつけることができます.`],
    ['sideBarOffset', /*html*/`設定ボタンの垂直オフセット、単位はパーセント、許容範囲は-40％〜40％です.`],
    ['useDefaultVideoSpeed', /*html*/`デフォルトの再生速度を使用するかどうかを設定します.`],
    ['defaultVideoSpeed', /*html*/`デフォルトの動画再生速度を設定する.`],
    ['autoDraw', /*html*/`ライブルームに抽選活動がある場合は、「受け取り」ボタンを自動的にクリックします.
    注意:少量の抽選にしか適用されますので、「99＋限定抽選」は他の人のスピードに追いつけないかもしれません.`],
    ['ajaxHook', /*html*/`「Ajax Hook API」を有効にするかどうか、他のプラグインまたは追加機能は、この「API」を通じて「Ajax」が要求する情報を取得できます.`],
    ['scriptLoadingMode', /*html*/`スクリプト機能読み込みモード:
- 同時: Bilibiliのページと同時に読み込む
- 延後: Bilibiliのページを優先的に読み込み、元のページの読み込みが完了したらスクリプトの読み込みを開始します
- 同時(自動): さまざまなページに従って読み込みモードを自動的に選択します．デフォルトは「同時」モード
- 延後(自動): さまざまなページに従って読み込みモードを自動的に選択します．デフォルトは「延後」モード`],
    [`fullActivityContent`, /*html*/`情報内容がどれぐらい長いにも関わらず、いつも完全な内容を展開します.`],
    [`activityImageSaver`, /*html*/`大きな情報画像を右クリックすると、画像付きのメッセージがポップアップ表示され、簡単に保存できます.`],
]);
export default {
    export: { toolTips },
};