<template>
	<div class="uk-container">
		<div class="uk-text-muted uk-margin-small-top uk-text-right">サイト作成者: <a class="uk-text-muted" href="https://twitter.com/JADENgygo">@JADENgygo</a></div>
		<div class="uk-text-lead uk-text-center uk-margin-top">クランプロフカード<span class="title-break">ジェネレーター</span></div>
		<ul uk-accordion>
			<li>
				<a class="uk-accordion-title" href="#">背景画像一覧</a>
				<div class="uk-accordion-content">
					<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small" uk-grid>
						<div v-for="(e, i) in backgroundImagePaths">
							<form class="uk-form-stacked uk-text-center">
								<div class="uk-form-controls">
									<input v-bind:id="'image' + i" class="uk-radio" type="radio" v-model="backgroundImageIndex" v-bind:value="i" v-on:change="changeBackgroundImageState()">
								</div>
								<label class="uk-form-label" v-bind:for="'image' + i"><img v-bind:src="e"></label>
							</form>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="uk-margin-top">背景画像</div>
		<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small" uk-grid>
			<img id="background-image" width="1920" height="1080" v-bind:src="backgroundImagePaths[backgroundImageIndex]">
		</div>

		<form class="uk-form-stacked">
			<label for="clan-name" class="uk-form-label uk-margin-top">クラン名</label>
			<div class="uk-form-controls"><input id="clan-name" type="text" class="uk-input uk-form-small uk-form-width-medium" v-model="clanName" v-on:input="previewCard()"></div>
			<label for="average-level" class="uk-form-label uk-margin-top">平均プレイヤーLv</label>
			<div class="uk-form-controls"><input id="average-level" type="number" class="uk-input uk-form-small uk-form-width-small" v-model="averageLevel" v-on:input="previewCard()"></div>
			<label for="member-num" class="uk-form-label uk-margin-top">メンバー数</label>
			<div class="uk-form-controls">
				<select id="member-num" class="uk-select uk-form-small uk-form-width-xsmall" v-model="memberNum" v-on:change="previewCard()">
					<option v-for="i in 30">{{ i }}</option>
				</select>
			</div>
			<label for="policy" class="uk-form-label uk-margin-top">活動方針</label>
			<div class="uk-form-controls"><input id="policy" type="text" class="uk-input uk-form-small uk-form-width-medium" v-model="policy" v-on:input="previewCard()"></div>
			<div class="uk-margin-top uk-form-label">加入条件</div>
			<div class="uk-form-controls">
				<label class="condition uk-margin-small-right"><input class="uk-radio" type="radio" value="誰でも加入" v-model="condition" v-on:change="previewCard()" checked> 誰でも加入</label>
				<label class="condition uk-margin-small-right"><input class="uk-radio" type="radio" value="承認あり" v-model="condition" v-on:change="previewCard()"> 承認あり</label>
				<label class="condition"><input class="uk-radio" type="radio" value="勧誘のみ" v-model="condition" v-on:change="previewCard()"> 勧誘のみ</label>
			</div>
			<label for="guideline" class="uk-form-label uk-margin-top">募集要項</label>
			<div class="uk-form-controls"><textarea id="guideline" class="uk-textarea" rows="5" v-model="guideline" v-on:input="previewCard()"></textarea></div>
			<div class="uk-margin-top uk-form-label">追加情報の表示</div>
			<div class="uk-form-controls">
				<label class="uk-margin-small-right"><input class="uk-radio" type="radio" value="true" v-model="postscriptDisplayed" v-on:change="previewCard()" checked> 表示する</label>
				<label><input class="uk-radio" type="radio" value="false" v-model="postscriptDisplayed" v-on:change="previewCard()"> 表示しない</label>
			</div>
			<label for="postscript" class="uk-margin-top uk-form-label">追加情報</label>
			<div class="uk-form-controls"><textarea  id="postscript" class="uk-textarea" rows="5" v-model="postscript" v-on:input="previewCard()"></textarea></div>
			<div class="uk-margin-top uk-form-label">クラバト順位の表示</div>
			<div class="uk-form-controls">
				<label class="uk-margin-small-right"><input class="uk-radio" type="radio" value="true" v-model="rankingDisplayed" v-on:change="previewCard()" checked> 表示する</label>
				<label><input class="uk-radio" type="radio" value="false" v-model="rankingDisplayed" v-on:change="previewCard()"> 表示しない</label>
			</div>
			<div class="uk-margin-top uk-form-label">クラバト順位</div>
			<div class="uk-form-controls">
				<div v-for="i in 3" class="uk-margin-small-bottom">
					<input class="uk-checkbox" type="checkbox" v-model="rankingsAvailable[i - 1]" v-on:change="previewCard()" checked>
					<select class="uk-select uk-form-small uk-form-width-xsmall" v-model="rankingMonths[i - 1]" v-on:change="previewCard()">
						<option v-for="e in 12">{{ e + '月' }}</option>
					</select>
					<input type="number" class="uk-input uk-form-small uk-form-width-small" v-model="rankings[i - 1]" v-on:input="previewCard()"> 位
				</div>
			</div>
		</form>

		<ul uk-accordion>
			<li>
				<a class="uk-accordion-title" href="#">詳細設定</a>
				<div class="uk-accordion-content">
					<div class="uk-form-label">レイアウト</div>
					<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small" uk-grid>
						<div v-for="i in 5">
							<label>
								<input class="uk-radio" type="radio" v-model="layout" v-bind:value="i - 1" v-on:change="previewCard()">
								<img v-bind:src="layoutImages[i - 1]">
							</label>
						</div>
					</div>

					<form class="uk-form-stacked">
						<hr class="uk-margin-top">
						<legend class="uk-legend">クラン名</legend>
						<label for="clan-name-font" class="uk-margin-top uk-form-label">フォント (使用可能フォントは端末に依存)</label>
						<div class="uk-form-controls">
							<select id="clan-name-font" class="uk-select uk-form-small uk-form-width-large" v-model="clanNameFont" v-on:change="previewCard()">
								<option v-for="e in fonts">{{ e }}</option>
							</select>
						</div>
						<label for="clan-name-font-size" class="uk-margin-top uk-form-label">フォントサイズ</label>
						<div class="uk-form-controls">
							<input id="clan-name-font-size" type="range" min="1" max="200" step="1" value="100" class="uk-range uk-form-small uk-form-width-small" v-model="clanNameFontSize" v-on:input="previewCard()">
							<label for="clan-name-font-size">{{ clanNameFontSize }}</label>
						</div>
						<div class="uk-margin-top uk-form-label">フォントスタイル</div>
						<div class="uk-form-controls">
							<label class="uk-margin-small-right"><input class="uk-checkbox" type="checkbox" value="bold" v-model="clanNameFontStyles" v-on:change="previewCard()" checked> 太字</label>
							<label><input class="uk-checkbox" type="checkbox" value="italic" v-model="clanNameFontStyles" v-on:change="previewCard()"> 斜体</label>
						</div>
						<div class="uk-margin-top uk-form-label">輪郭の有無</div>
						<div class="uk-form-controls">
							<label class="uk-margin-small-right"><input class="uk-radio" type="radio" value="true" v-model="clanNameOutlineDisplayed" v-on:change="previewCard()" checked> 有り</label>
							<label><input class="uk-radio" type="radio" value="false" v-model="clanNameOutlineDisplayed" v-on:change="previewCard()"> 無し</label>
						</div>
						<label for="clan-name-stroke-color" class="uk-margin-top uk-form-label">輪郭色</label>
						<div class="uk-form-controls"><input id="clan-name-stroke-color" type="color" value="#000000" v-model="clanNameStrokeColor" v-on:input="previewCard()"></div>
						<label for="clan-name-outline-width" class="uk-margin-top uk-form-label">輪郭の太さ</label>
						<div class="uk-form-controls">
							<input id="clan-name-outline-width" type="range" min="1" max="20" step="1" value="10" class="uk-range uk-form-small uk-form-width-small" v-model="clanNameOutlineWidth" v-on:input="previewCard()">
							<label for="clan-name-outline-width">{{ clanNameOutlineWidth }}</label>
						</div>
						<label for="clan-name-fill-color" class="uk-margin-top uk-form-label">塗り潰し色</label>
						<div class="uk-form-controls"><input id="clan-name-fill-color" type="color" value="#3264FF" v-model="clanNameFillColor" v-on:input="previewCard()"></div>
						<label for="clan-name-fill-color-transparency" class="uk-margin-top uk-form-label">塗り潰し色の透明度</label>
						<div class="uk-form-controls">
							<input id="clan-name-fill-color-transparency" type="range" min="0.0" max="1.0" step="0.1" value="1.0" class="uk-range uk-form-small uk-form-width-small" v-model="clanNameFillColorTransparency" v-on:input="previewCard()">
							<label for="clan-name-fill-color-transparency">{{ formattedClanNameFillColorTransparency }}</label>
						</div>
						<button type="button" class="uk-button uk-button-default uk-button-small uk-margin-top" v-on:click="resetClanNameSetting()">リセット</button>

						<hr>
						<legend class="uk-legend">ラベル</legend>
						<label for="label-font" class="uk-margin-top uk-form-label">フォント (使用可能フォントは端末に依存)</label>
						<div class="uk-form-controls">
							<select id="label-font" class="uk-select uk-form-small uk-form-width-large" v-model="labelFont" v-on:change="previewCard()">
								<option v-for="e in fonts">{{ e }}</option>
							</select>
						</div>
						<div class="uk-margin-top uk-form-label">フォントスタイル</div>
						<div class="uk-form-controls">
							<label class="uk-margin-small-right"><input class="uk-checkbox" type="checkbox" value="bold" v-model="labelFontStyles" v-on:change="previewCard()" checked> 太字</label>
							<label><input class="uk-checkbox" type="checkbox" value="italic" v-model="labelFontStyles" v-on:change="previewCard()"> 斜体</label>
						</div>
						<label for="label-font-color" class="uk-margin-top uk-form-label">文字色</label>
						<div class="uk-form-controls"><input id="label-font-color" type="color" value="#FFFFFF" v-model="labelFontColor" v-on:input="previewCard()"></div>
						<div class="uk-margin-top uk-form-label">背景色の有無</div>
						<div class="uk-form-controls">
							<label class="uk-margin-small-right"><input class="uk-radio" type="radio" value="true" v-model="labelBackgroundDisplayed" v-on:change="previewCard()" checked> 有り</label>
							<label><input class="uk-radio" type="radio" value="false" v-model="labelBackgroundDisplayed" v-on:change="previewCard()"> 無し</label>
						</div>
						<label for="label-background-color" class="uk-margin-top uk-form-label">背景色</label>
						<div class="uk-form-controls"><input id="label-background-color" type="color" value="#6464FF" v-model="labelBackgroundColor" v-on:input="previewCard()"></div>
						<button type="button" class="uk-button uk-button-default uk-button-small uk-margin-top" v-on:click="resetLabelSetting()">リセット</button>

						<hr>
						<legend class="uk-legend">入力値 (クラン名以外)</legend>
						<label for="input-font" class="uk-form-label uk-margin-top">フォント (使用可能フォントは端末に依存)</label>
						<div class="uk-form-controls">
							<select id="input-font" class="uk-select uk-form-small uk-form-width-large" v-model="inputFont" v-on:change="previewCard()">
								<option v-for="e in fonts">{{ e }}</option>
							</select>
						</div>
						<div class="uk-margin-top uk-form-label">フォントスタイル</div>
						<div class="uk-form-controls">
							<label class="uk-margin-small-right"><input class="uk-checkbox" type="checkbox" value="bold" v-model="inputFontStyles" v-on:change="previewCard()" checked> 太字</label>
							<label><input class="uk-checkbox" type="checkbox" value="italic" v-model="inputFontStyles" v-on:change="previewCard()"> 斜体</label>
						</div>
						<label for="input-font-color" class="uk-margin-top uk-form-label">文字色</label>
						<div class="uk-form-controls"><input id="input-font-color" type="color" value="#000000" v-model="inputFontColor" v-on:input="previewCard()"></div>
						<button type="button" class="uk-button uk-button-default uk-button-small uk-margin-top" v-on:click="resetInputSetting()">リセット</button>

						<hr>
						<legend class="uk-legend">ペイン</legend>
						<div class="uk-margin-top uk-form-label">フレームの有無</div>
						<div class="uk-form-controls">
							<label class="uk-margin-small-right"><input class="uk-radio" type="radio" value="true" v-model="paneFrameDisplayed" v-on:change="previewCard()" checked> 有り</label>
							<label><input class="uk-radio" type="radio" value="false" v-model="paneFrameDisplayed" v-on:change="previewCard()"> 無し</label>
						</div>
						<label for="pane-frame-color" class="uk-margin-top uk-form-label">フレーム色</label>
						<div class="uk-form-controls"><input id="pane-frame-color" type="color" value="#000000" v-model="paneFrameColor" v-on:input="previewCard()"></div>
						<label for="pane-frame-width" class="uk-margin-top uk-form-label">フレームの太さ</label>
						<div class="uk-form-controls">
							<input id="pane-frame-width" type="range" min="1" max="10" step="1" value="3" class="uk-range uk-form-small uk-form-width-small" v-model="paneFrameWidth" v-on:input="previewCard()">
							<label for="pane-frame-width">{{ paneFrameWidth }}</label>
						</div>
						<label for="pane-color" class="uk-margin-top uk-form-label">背景色</label>
						<div class="uk-form-controls"><input id="pane-color" type="color" value="#FFFFFF" v-model="paneColor" v-on:input="previewCard()"></div>
						<label for="pane-transparency" class="uk-margin-top uk-form-label">透明度</label>
						<div class="uk-form-controls">
							<input id="pane-transparency" type="range" min="0.0" max="1.0" step="0.1" value="0.6" class="uk-range uk-form-small uk-form-width-small" v-model="paneTransparency" v-on:input="previewCard()">
							<label for="pane-transparency">{{ formattedPaneTransparency }}</label>
						</div>
						<button type="button" class="uk-button uk-button-default uk-button-small uk-margin-top" v-on:click="resetPaneSetting()">リセット</button>
						<hr>
						<div class="uk-text-right"><button type="button" class="uk-button uk-button-default uk-button-small" uk-toggle="target: #all-settings-reset">全設定リセット</button></div>
						<div id="all-settings-reset" uk-modal>
							<div class="uk-modal-dialog uk-modal-body">
								<div class="uk-margin-bottom">全設定をリセットしますか</div>
								<div class="uk-text-right">
									<button class="uk-modal-close uk-button uk-button-default uk-button-small uk-margin-right" type="button">キャンセル</button>
									<button class="uk-modal-close uk-button uk-button-danger uk-button-small" type="button" v-on:click="resetAllSettings()">リセット</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</li>
		</ul>
		<div><button class="uk-button uk-button-default uk-button-small" v-on:click="saveCard()">カードを保存</button></div>
		<div uk-alert class="uk-alert-primary">
			<a class="uk-alert-close" uk-close></a>
			<div>ボタンが動作しない時はプレビューを保存するか別ブラウザを使用してください</div>
		</div>
		<div>プレビュー</div>
		<img id="preview" class="uk-margin-small-bottom" v-bind:style="previewStyle">
		<div class="resource">
		</div>
			<canvas id="canvas" width="1920" height="1080"></canvas>
			<img id="loading-image" v-bind:src="loadingImagePath">
	</div>
</template>
<script>
import UIkit from 'uikit';
import platform from 'platform';
export default {
	props: {
		fonts: Array,
		backgroundImageNames: Array
	},
	data: function() {
		return {
			previewStyle: {},
			loadingImagePath: require('./img/bundle/loading.webp'),
			backgroundImageChanged: true,
			backgroundImageIndex: 0,
			backgroundImagePaths: this.backgroundImageNames.map(e => require('./img/bundle/' + e)),
			clanName: 'おひるねくらぶ',
			averageLevel: 175,
			memberNum: 25,
			policy: 'わいわいプレイ',
			condition: '誰でも加入',
			guideline: '',
			postscriptDisplayed: 'true',
			postscript: '',
			rankingDisplayed: 'true',
			rankingsAvailable: [true, true, true],
			rankingMonths: [
				new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1).getMonth() + 1 + '月',
				new Date(new Date().getFullYear(), new Date().getMonth() - 2, 1).getMonth() + 1 + '月',
				new Date(new Date().getFullYear(), new Date().getMonth() - 3, 1).getMonth() + 1 + '月'
			],
			rankings: [1, 1, 1],
			layout: 0,
			layoutImages: [
				require('./img/bundle/layout0.webp'),
				require('./img/bundle/layout1.webp'),
				require('./img/bundle/layout2.webp'),
				require('./img/bundle/layout3.webp'),
				require('./img/bundle/layout4.webp')
			],
			clanNameFont: platform.name.indexOf('Safari') === -1 ? 'monospace' : 'ヒラギノ角ゴシック W3',
			clanNameFontSize: 100,
			clanNameFontStyles: ['bold'],
			clanNameOutlineDisplayed: 'true',
			clanNameStrokeColor: '#000000',
			clanNameOutlineWidth: '10',
			clanNameFillColor: '#3264FF',
			clanNameFillColorTransparency: '1.0',
			labelFont: platform.name.indexOf('Safari') === -1 ? 'monospace' :  'ヒラギノ角ゴシック W3',
			labelFontStyles: ['bold'],
			labelFontColor: '#FFFFFF',
			labelBackgroundDisplayed: 'true',
			labelBackgroundColor: '#6464FF',
			inputFont: platform.name.indexOf('Safari') === -1 ? 'monospace' :  'ヒラギノ角ゴシック W3',
			inputFontStyles: ['bold'],
			inputFontColor: '#000000',
			paneFrameDisplayed: 'true',
			paneFrameColor: '#000000',
			paneFrameWidth: '3',
			paneColor: '#FFFFFF',
			paneTransparency: '0.6',
		};
	},
	computed: {
		formattedClanNameFillColorTransparency: function() {
			if (this.clanNameFillColorTransparency === '0') {
				return '0.0';
			}	
			else if (this.clanNameFillColorTransparency === '1') {
				return '1.0';
			}
			else {
				return this.clanNameFillColorTransparency;
			}
		},
		formattedPaneTransparency: function() {
			if (this.paneTransparency === '0') {
				return '0.0';
			}	
			else if (this.paneTransparency === '1') {
				return '1.0';
			}
			else {
				return this.paneTransparency;
			}
		},
		inputFontStyle: function() {
			return this.inputFontStyles.join(' ');
		},
		clanNameFontStyle: function() {
			return this.clanNameFontStyles.join(' ');
		},
		labelFontStyle: function() {
			return this.labelFontStyles.join(' ');
		}
	},
	mounted: function() {
		const f = style => {
			if (window.orientation === 0 && window.matchMedia(`(${style}-width:426px)`).matches) {
				this.$set(this.previewStyle, 'height', 'auto');
				this.$set(this.previewStyle, 'width', 'auto');
			}
			else {
				this.$set(this.previewStyle, 'height', 'auto');
				this.$set(this.previewStyle, 'width', '66%');
			}
		};
		f('max');
		window.addEventListener('resize', () => f('max'));
		// matchMediaは回転前の幅を判定しているらしいのでminとmaxが逆になる？
		window.addEventListener('orientationchange', () => f('min'));
		document.getElementById('background-image').addEventListener('load', () => {
			this.previewCard();
		});
	},
	methods: {
		changeBackgroundImageState: function() {
			this.backgroundImageChanged = true;
		},
		saveCard: function() {
			const canvas = document.getElementById('canvas');
			const a = document.createElement('a');
			a.href = canvas.toDataURL('image/png');
			a.download = 'クランプロフカード.png';
			a.click();
		},
		previewCard: function() {
			const canvas = document.getElementById('canvas');
			const context = canvas.getContext('2d');
			if (this.backgroundImageChanged) {
				this.backgroundImageChanged = false;
				context.clearRect(0, 0, canvas.width, canvas.height);
				const loadingImage = document.getElementById('loading-image');
				context.globalAlpha = 0.5;
				context.drawImage(loadingImage, 0, 0);
				context.globalAlpha = 1.0;
				console.log(1);
				document.getElementById('preview').src = canvas.toDataURL();
				console.log(2);
			}
			const backgroundImage = document.createElement('img');
			backgroundImage.src = './img/no_bundle/' + this.backgroundImageNames[this.backgroundImageIndex];
			backgroundImage.addEventListener('load', () => {
				context.drawImage(backgroundImage, 0, 0);
				// basicInfo, postscript, ranking
				const positions = [
					[[canvas.width * 2.0 / 90.0, canvas.height * 4.0 / 15.0], [canvas.width * 1.97 / 3.0, canvas.height * 4.0 / 15.0], [canvas.width * 1.97 / 3.0, canvas.height * 11.65 / 15.0]],
					[[canvas.width * 2.0 / 90.0, canvas.height * 4.0 / 15.0], [canvas.width * 1.97 / 3.0, canvas.height * 8.29 / 15.0], [canvas.width * 1.97 / 3.0, canvas.height * 4.0 / 15.0]],
					[[canvas.width * 1.135 / 3.0, canvas.height * 4.0 / 15.0], [canvas.width * 2.0 / 90.0, canvas.height * 4.0 / 15.0], [canvas.width * 2.0 / 90.0, canvas.height * 11.65 / 15.0]],
					[[canvas.width * 1.135 / 3.0, canvas.height * 4.0 / 15.0], [canvas.width * 2.0 / 90.0, canvas.height * 8.29 / 15.0], [canvas.width * 2.0 / 90.0, canvas.height * 4.0 / 15.0]],
					[[canvas.width * 1.0 / 5.0, canvas.height * 4.0 / 15.0], [null, null], [null, null]]
				];
				this.drawClanName(context, canvas.width / 2.0, canvas.height * 1.7 / 15.0);
				this.drawBasicInfo(context, positions[this.layout][0][0], positions[this.layout][0][1], canvas.width, canvas.height);
				if (this.postscriptDisplayed === 'true' && this.layout !== 4) {
					this.drawPostscript(context, positions[this.layout][1][0], positions[this.layout][1][1], canvas.width, canvas.height);
				}
				if (this.rankingDisplayed === 'true' && this.layout !== 4) {
					this.drawRanking(context, positions[this.layout][2][0], positions[this.layout][2][1], canvas.width, canvas.height);
				}
				console.log(3);
				document.getElementById('preview').src = canvas.toDataURL();
				console.log(4);
			});
		},
		drawClanName: function(context, xPos, yPos) {
			context.font = this.clanNameFontStyle + ' ' + this.clanNameFontSize + `px '${this.clanNameFont}'`;
			context.textBaseline = 'middle';
			context.textAlign = 'center';
			if (this.clanNameOutlineDisplayed === 'true') {
				context.lineWidth = this.clanNameOutlineWidth;
				context.strokeStyle = this.clanNameStrokeColor;
				context.strokeText(this.clanName, xPos, yPos);
			}
			const rgb = this.convertHexToRgb(this.clanNameFillColor);
			context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${this.clanNameFillColorTransparency})`;
			context.fillText(this.clanName, xPos, yPos);
		},
		drawBasicInfo: function(context, xPos, yPos, canvasWidth, canvasHeight) {
			const rectWidth = canvasWidth * 3.0 / 5.0;
			this.drawPane(context, xPos, yPos - 50, rectWidth, canvasHeight * 2.98 / 4.0);
			this.drawLabel(context, xPos + 30, yPos + 15, '平均プレイヤーLv', 40);
			this.drawInput(context, xPos + 30 + context.measureText('平均プレイヤーLv').width + 40, yPos + 15, this.averageLevel, 40, 'start');
			this.drawLabel(context, xPos + 700, yPos + 15, 'メンバー数', 40);
			this.drawInput(context, xPos + 700 + context.measureText('メンバー数').width + 40, yPos + 15, this.memberNum, 40, 'start');
			this.drawLabel(context, xPos + 30, yPos + 90, '活動方針', 40);
			this.drawInput(context, xPos + 30 + context.measureText('活動方針').width + 40, yPos + 90, this.policy, 40, 'start');
			this.drawLabel(context, xPos + 700, yPos + 90, '加入条件', 40);
			this.drawInput(context, xPos + 700 + context.measureText('加入条件').width + 40, yPos + 90, this.condition, 40, 'start');
			this.drawLabel(context, xPos + 30, yPos + 165, '募集要項', 40);
			this.drawSentence(context, xPos + 25, yPos + 230, this.guideline, 40, rectWidth, 0.93);
		},
		drawPostscript: function(context, xPos, yPos, canvasWidth, canvasHeight) {
			const rectWidth = canvasWidth * 1.60 / 5.0;
			this.drawPane(context, xPos, yPos - 50, rectWidth, canvasHeight * 2.3 / 5.0);
			this.drawLabel(context, xPos + 30, yPos + 15, '追加情報', 40);
			this.drawSentence(context, xPos + 20, yPos + 80, this.postscript, 40, rectWidth, 0.88);
		},
		drawRanking: function(context, xPos, yPos, canvasWidth, canvasHeight) {
			this.drawPane(context, xPos, yPos - 50, canvasWidth * 1.60 / 5.0, canvasHeight * 1.17 / 5.0);
			for (let i = 0; i < 3; ++i) {
				this.drawLabel(context, xPos + 30, yPos + 15 + 75 * i, this.rankingMonths[i] + 'のクラバト順位', 40);
				this.drawInput(context, xPos + 595, yPos + 15 + 75 * i, this.rankingsAvailable[i] ? this.rankings[i] + '位' : '- 位', 40, 'end');
			}
		},
		drawLabel: function(context, x, y, text, fontSize) {
			context.font = this.labelFontStyle + ' ' + fontSize + `px '${this.labelFont}'`;
			if (this.labelBackgroundDisplayed === 'true') {
				context.fillStyle = this.labelBackgroundColor;
				context.beginPath();
				context.fillRect(x - 10.0, y - fontSize, context.measureText(text).width + 23.0, fontSize * 1.3);
			}
			context.fillStyle = this.labelFontColor;
			context.textAlign = 'start';
			context.textBaseline = 'alphabetic';
			context.fillText(text, x, y);
		},
		drawInput: function(context, x, y, text, fontSize, textAlign) {
			context.textAlign = textAlign;
			context.textBaseline = 'alphabetic';
			context.font = this.inputFontStyle + ' ' + fontSize + `px '${this.inputFont}'`;
			context.fillStyle = this.inputFontColor;
			context.fillText(text, x, y);
		},
		drawSentence: function(context, x, y, text, fontSize, rectWidth, breakRatio) {
			context.textAlign = 'start';
			context.textBaseline = 'alphabetic';
			context.font = this.inputFontStyle + ' ' + fontSize + `px '${this.inputFont}'`;
			context.fillStyle = this.inputFontColor;
			let row = 1;
			let splitPosition = 0;
			for (let i = 1; i <= text.length; ++i) {
				const w = context.measureText(text.substr(splitPosition, i - splitPosition)).width;
				if (rectWidth * breakRatio <= w || text[i - 1] === '\n') {
					const y_ = y + (row - 1) * 50.0;
					const s = text.substr(splitPosition, i - splitPosition);
					context.fillText(s, x, y_);
					row++;
					splitPosition = i;
				}
				if (i === text.length) {
					const y_ = y + (row - 1) * 50.0;
					const s = text.substr(splitPosition, i - splitPosition);
					context.fillText(s, x, y_);
				}
			}
		},
		drawPane: function(context, x, y, width, height) {
			const rgb = this.convertHexToRgb(this.paneColor);
			context.beginPath();
			context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${this.paneTransparency})`;
			context.fillRect(x, y, width, height);
			if (this.paneFrameDisplayed === 'true') {
				context.strokeStyle = this.paneFrameColor;
				context.lineWidth = this.paneFrameWidth;
				context.strokeRect(x, y, width, height);
			}
		},
		resetBasicSetting: function() {
			this.backgroundImageIndex = 0;
			this.clanName = 'おひるねくらぶ';
			this.averageLevel = 175;
			this.memberNum = 25;
			this.policy = 'わいわいプレイ';
			this.condition = '誰でも加入';
			this.guideline = '';
			this.postscriptDisplayed = 'true';
			this.postscript = '';
			this.rankingDisplayed = 'true';
			this.rankingsAvailable =  [true, true, true];
			this.rankingMonths = [
				new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1).getMonth() + 1 + '月',
				new Date(new Date().getFullYear(), new Date().getMonth() - 2, 1).getMonth() + 1 + '月',
				new Date(new Date().getFullYear(), new Date().getMonth() - 3, 1).getMonth() + 1 + '月'
			];
			this.rankings = [1, 1, 1];
			this.layout = 0;
			this.previewCard();
		},
		resetClanNameSetting: function() {
			this.clanNameFont = this.fonts.indexOf('monospace') === -1 ? this.fonts[0] : 'monospace';
			this.clanNameFontSize = 100;
			this.clanNameFontStyles = ['bold'];
			this.clanNameOutlineDisplayed = 'true';
			this.clanNameStrokeColor = '#000000';
			this.clanNameOutlineWidth = '10';
			this.clanNameFillColor = '#3264FF';
			this.clanNameFillColorTransparency = '1.0';
			this.previewCard();
		},
		resetLabelSetting: function() {
			this.labelFont = this.fonts.indexOf('monospace') === -1 ? this.fonts[0] : 'monospace';
			this.labelFontStyles = ['bold'];
			this.labelFontColor = '#FFFFFF';
			this.labelBackgroundDisplayed = 'true';
			this.labelBackgroundColor = '#6464FF';
			this.previewCard();
		},
		resetInputSetting: function() {
			this.inputFont = this.fonts.indexOf('monospace') === -1 ? this.fonts[0] : 'monospace';
			this.inputFontStyles = ['bold'];
			this.inputFontColor = '#000000';
			this.previewCard();
		},
		resetPaneSetting: function() {
			this.paneFrameDisplayed = 'true';
			this.paneFrameColor = '#000000'
			this.paneFrameWidth = '3';
			this.paneColor = '#FFFFFF';
			this.paneTransparency = '0.6';
			this.previewCard();
		},
		resetAllSettings: function() {
			this.resetBasicSetting();
			this.resetClanNameSetting();
			this.resetLabelSetting();
			this.resetInputSetting();
			this.resetPaneSetting();
			UIkit.notification({
				message: '全設定をリセットしました',
				pos: 'top-center',
				timeout: 3000
			});
		},
		convertHexToRgb: function(hex) {
			const c = [hex.substr(1, 2), hex.substr(3, 2), hex.substr(5, 2)];
			let rgb = [];
			for (let e of c) {
				let buf = 0;
				const weight = [16, 1];
				for (let i = 0; i < 2; ++i) {
					switch (e[i].toUpperCase()) {
						case 'A':
							buf += 10 * weight[i];
							break;
						case 'B':
							buf += 11 * weight[i];
							break;
						case 'C':
							buf += 12 * weight[i];
							break;
						case 'D':
							buf += 13 * weight[i];
							break;
						case 'E':
							buf += 14 * weight[i];
							break;
						case 'F':
							buf += 15 * weight[i];
							break;
						default:
							buf += parseInt(e[i]) * weight[i];
							break;
					}
				}
				rgb.push(buf);
			}
			return rgb;
		},
	},
}
</script>
<style scoped>
@media screen and (max-width: 420px) {
	.title-break::before {
		content: '\A';
		white-space: pre;
	}
}

@media screen and (max-width: 340px) {
	.condition {
		display: block;
	}
}

.resource {
	display: none;
}
</style>
