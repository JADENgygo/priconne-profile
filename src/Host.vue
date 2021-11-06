<template>
	<div class="uk-container">
		<div class="uk-text-muted uk-margin-small-top uk-text-right">サイト作成者: <a class="uk-text-muted" href="https://twitter.com/JADENgygo">@JADENgygo</a></div>
		<div class="uk-text-lead uk-text-center uk-margin-top">クランプロフカード<span class="title-break">ジェネレーター</span></div>
		<div class="uk-form-stacked uk-margin-top">
			<ul uk-accordion>
				<li>
					<a class="uk-accordion-title uk-text-small" href="#">背景画像一覧</a>
					<div class="uk-accordion-content">
						<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small" uk-grid>
							<div v-for="(e, i) in thumbnailPaths" class="uk-text-center">
								<div class="uk-form-controls">
									<input v-bind:id="'image' + i" class="uk-radio" type="radio" v-model="thumbnailIndex" v-bind:value="i" v-on:change="drawBackgroundImage()">
								</div>
								<label class="uk-form-label" v-bind:for="'image' + i"><img v-bind:src="e"></label>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<div class="uk-form-label">背景画像</div>
			<div class="uk-form-controls uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small" uk-grid>
				<div><img v-bind:src="thumbnailPaths[thumbnailIndex]"></div>
			</div>
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
				<label class="condition uk-margin-small-right"><input class="uk-radio" type="radio" value="誰でも加入" v-model="condition" v-on:change="previewCard()"> 誰でも加入</label>
				<label class="condition uk-margin-small-right"><input class="uk-radio" type="radio" value="承認あり" v-model="condition" v-on:change="previewCard()"> 承認あり</label>
				<label class="condition"><input class="uk-radio" type="radio" value="勧誘のみ" v-model="condition" v-on:change="previewCard()"> 勧誘のみ</label>
			</div>
			<label for="guideline" class="uk-form-label uk-margin-top">募集要項</label>
			<div class="uk-form-controls"><textarea id="guideline" class="uk-textarea" rows="5" v-model="guideline" v-on:input="previewCard()"></textarea></div>
			<div class="uk-margin-top uk-form-label">クラバト順位</div>
			<div class="uk-form-controls">
				<input class="uk-checkbox" type="checkbox" v-model="rankingAvailable" v-on:change="previewCard()" checked>
				<input type="number" class="uk-input uk-form-small uk-form-width-small" v-model="ranking" v-on:input="previewCard()"> 位
			</div>
			<div class="uk-margin-top uk-form-label">表示位置</div>
			<div class="uk-form-controls">
				<label class="condition uk-margin-small-right"><input class="uk-radio" type="radio" v-bind:value=0 v-model="position" v-on:change="previewCard()"> 左</label>
				<label class="condition uk-margin-small-right"><input class="uk-radio" type="radio" v-bind:value=1 v-model="position" v-on:change="previewCard()"> 中央</label>
				<label class="condition"><input class="uk-radio" type="radio" v-bind:value=2 v-model="position" v-on:change="previewCard()"> 右</label>
			</div>
			<ul uk-accordion>
				<li>
					<a class="uk-accordion-title uk-text-small" href="#">詳細設定</a>
					<div class="uk-accordion-content">
						<div>クラン名</div>
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
						<div>ラベル</div>
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
						<div>入力値 (クラン名以外)</div>
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
						<div>ペイン</div>
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
						<div>背景画像</div>
						<label for="pane-transparency" class="uk-margin-top uk-form-label">透明度</label>
						<div class="uk-form-controls">
							<input id="background-image-transparency" type="range" min="0.0" max="1.0" step="0.1" value="0.6" class="uk-range uk-form-small uk-form-width-small" v-model="backgroundImageTransparency" v-on:input="previewCard()">
							<label for="background-image-transparency">{{ formattedBackgroundImageTransparency }}</label>
						</div>
						<button type="button" class="uk-button uk-button-default uk-button-small uk-margin-top" v-on:click="resetBackgroundImage()">リセット</button>
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
					</div>
				</li>
			</ul>
			<button class="uk-button uk-button-default uk-button-small" v-on:click="saveCard()">カードを保存</button>
			<div uk-alert class="uk-alert-primary">ボタンが動作しない時はプレビューを保存するか別ブラウザを使用してください</div>
			<div class="uk-form-label">プレビュー</div>
			<div class="uk-form-controls">
				<canvas id="canvas" class="uk-margin-small-bottom" width="1920" height="1080" v-bind:style="previewStyle"></canvas>
			</div>
		</div>
		<div class="resource">
			<img id="loading-image" v-bind:src="loadingImagePath">
			<canvas id="background-canvas" width="1920" height="1080"></canvas>
		</div>
	</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import UIkit from 'uikit';
import platform from 'platform';

type StringBoolean = 'true' | 'false';

const Props = Vue.extend({
	props: {
		fonts: Array,
		backgroundImageNames: Array
	},
});


@Component
export default class Host extends Props {
	readonly initialFont: string;
	previewStyle: {[key: string]: string};
	loadingImagePath: string;
	thumbnailIndex: number;
	thumbnailPaths: string[];
	clanName: string;
	averageLevel: number;
	memberNum: number;
	policy: string;
	condition: string;
	guideline: string;
	rankingAvailable: boolean;
	ranking: number;
	position: number;
	clanNameFont: string;
	clanNameFontSize: number;
	clanNameFontStyles: string[];
	clanNameOutlineDisplayed: StringBoolean;
	clanNameStrokeColor: string;
	clanNameOutlineWidth: string;
	clanNameFillColor: string;
	clanNameFillColorTransparency :string;
	labelFont: string;
	labelFontStyles: string[];
	labelFontColor: string;
	labelBackgroundDisplayed: StringBoolean;
	labelBackgroundColor: string;
	inputFont: string;
	inputFontStyles: string[];
	inputFontColor: string;
	paneFrameDisplayed: StringBoolean;
	paneFrameColor: string;
	paneFrameWidth: string;
	paneColor: string;
	paneTransparency: string;
	backgroundImageTransparency: string;

	constructor() {
		super();
		this.previewStyle = {};
		this.loadingImagePath = require('./img/bundle/loading.webp');
		this.thumbnailIndex = 62;
		this.thumbnailPaths = this.backgroundImageNames.map(e => require('./img/bundle/' + e));
		this.clanName = 'もっと美食殿';
		this.averageLevel = 200;
		this.memberNum = 25;
		this.policy = 'わいわいプレイ';
		this.condition = '誰でも加入';
		this.guideline = '美食殿の活動目的は、この世の美味しい物の探求です！';
		this.rankingAvailable = true;
		this.ranking = 3000;
		this.position = 1;
		this.initialFont = (platform.name ?? 'unknown').indexOf('Safari') === -1 ? (this.fonts.includes('ＭＳ Ｐゴシック') ? 'ＭＳ Ｐゴシック' : 'monospace') : 'ヒラギノ角ゴシック W3';
		this.clanNameFont = this.initialFont;
		this.clanNameFontSize = 100;
		this.clanNameFontStyles = ['bold'];
		this.clanNameOutlineDisplayed = 'true';
		this.clanNameStrokeColor = '#FFFFFF';
		this.clanNameOutlineWidth = '10';
		this.clanNameFillColor = '#000000';
		this.clanNameFillColorTransparency = '1.0';
		this.labelFont = this.initialFont;
		this.labelFontStyles = ['bold'];
		this.labelFontColor = '#FFFFFF';
		this.labelBackgroundDisplayed = 'true';
		this.labelBackgroundColor = '#000000';
		this.inputFont = this.initialFont;
		this.inputFontStyles = ['bold'];
		this.inputFontColor = '#000000';
		this.paneFrameDisplayed = 'false';
		this.paneFrameColor = '#000000';
		this.paneFrameWidth = '3';
		this.paneColor = '#FFFFFF';
		this.paneTransparency = '0.6';
		this.backgroundImageTransparency = '1.0';
	}

	get formattedClanNameFillColorTransparency(): string {
		if (this.clanNameFillColorTransparency === '0') {
			return '0.0';
		}
		else if (this.clanNameFillColorTransparency === '1') {
			return '1.0';
		}
		else {
			return this.clanNameFillColorTransparency;
		}
	}

	get formattedPaneTransparency(): string {
		if (this.paneTransparency === '0') {
			return '0.0';
		}
		else if (this.paneTransparency === '1') {
			return '1.0';
		}
		else {
			return this.paneTransparency;
		}
	}

	get formattedBackgroundImageTransparency(): string {
		if (this.backgroundImageTransparency === '0') {
			return '0.0';
		}
		else if (this.backgroundImageTransparency === '1') {
			return '1.0';
		}
		else {
			return this.backgroundImageTransparency;
		}
	}

	get inputFontStyle(): string {
		return this.inputFontStyles.join(' ');
	}

	get clanNameFontStyle(): string {
		return this.clanNameFontStyles.join(' ');
	}

	get labelFontStyle(): string {
		return this.labelFontStyles.join(' ');
	}

	mounted(): void {
		const f = (style: 'min' | 'max'): void => {
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
		this.drawBackgroundImage();
	}

	saveCard(): void {
		const canvas = document.getElementById('canvas') as HTMLCanvasElement;
		const a = document.createElement('a');
		a.href = canvas.toDataURL('image/png');
		a.download = 'クランプロフカード.png';
		a.click();
	}

	previewCard(): void {
		const canvas = document.getElementById('canvas') as HTMLCanvasElement;
		const context = canvas.getContext('2d') as CanvasRenderingContext2D;
		context.clearRect(0, 0, canvas.width, canvas.height);
		const backgroundCanvas = document.getElementById('background-canvas') as HTMLCanvasElement;
		context.globalAlpha = parseFloat(this.backgroundImageTransparency);
		context.drawImage(backgroundCanvas, 0, 0);
		context.globalAlpha = 1.0;
		{
			const xs = [40.0 + (canvas.width * 3.0 / 5.0) / 2.0, canvas.width / 2.0, canvas.width - (canvas.width * 3.0 / 5.0) + (canvas.width * 3.0 / 5.0) / 2.0 - 40.0];
			this.drawClanName(context, xs[this.position], canvas.height * 1.7 / 15.0);
		}
		{
			const xs = [40.0, canvas.width * 1.0 / 5.0, canvas.width - (canvas.width * 3.0 / 5.0) - 40.0];
			this.drawBasicInfo(context, xs[this.position], canvas.height * 4.0 / 15.0, canvas.width, canvas.height);
		}
	}

	drawBackgroundImage(): void {
		const canvas = document.getElementById('canvas') as HTMLCanvasElement;
		const context = canvas.getContext('2d') as CanvasRenderingContext2D;
		context.clearRect(0, 0, canvas.width, canvas.height);
		const loadingImage = document.getElementById('loading-image') as CanvasImageSource;
		context.globalAlpha = 0.5;
		context.drawImage(loadingImage, 0, 0);
		context.globalAlpha = 1.0;
		const backgroundImage = document.createElement('img');
		backgroundImage.src = './img/no_bundle/' + this.backgroundImageNames[this.thumbnailIndex];
		backgroundImage.addEventListener('load', () => {
			const canvas = document.getElementById('background-canvas') as HTMLCanvasElement;
			const context = canvas.getContext('2d') as CanvasRenderingContext2D;
			context.drawImage(backgroundImage, 0, 0);
			this.previewCard();
		});
	}

	drawClanName(context: CanvasRenderingContext2D, xPos: number, yPos: number): void {
		context.font = this.clanNameFontStyle + ' ' + this.clanNameFontSize + `px '${this.clanNameFont}'`;
		context.textBaseline = 'middle';
		context.textAlign = 'center';
		if (this.clanNameOutlineDisplayed === 'true') {
			context.lineWidth = parseInt(this.clanNameOutlineWidth);
			context.strokeStyle = this.clanNameStrokeColor;
			context.strokeText(this.clanName, xPos, yPos);
		}
		const rgb = this.convertHexToRgb(this.clanNameFillColor);
		context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${this.clanNameFillColorTransparency})`;
		context.fillText(this.clanName, xPos, yPos);
	}

	drawBasicInfo(context: CanvasRenderingContext2D, xPos: number, yPos: number, canvasWidth: number, canvasHeight: number): void {
		const rectWidth = canvasWidth * 3.0 / 5.0;
		// drawPaneで設定されたcontextをdrawLabelの引数で使用するため、この順番で呼び出す必要がある
		this.drawPane(context, xPos, yPos - 50, rectWidth, canvasHeight * 2.98 / 4.0);
		this.drawLabel(context, xPos + 30, yPos + 15, '平均プレイヤーLv', 40);
		this.drawInput(context, xPos + 30 + context.measureText('平均プレイヤーLv').width + 40, yPos + 15, this.averageLevel.toString(), 40, 'start');
		this.drawLabel(context, xPos + 700, yPos + 15, 'メンバー数', 40);
		this.drawInput(context, xPos + 700 + context.measureText('メンバー数').width + 40, yPos + 15, this.memberNum.toString(), 40, 'start');
		this.drawLabel(context, xPos + 30, yPos + 90, '活動方針', 40);
		this.drawInput(context, xPos + 30 + context.measureText('活動方針').width + 40, yPos + 90, this.policy, 40, 'start');
		this.drawLabel(context, xPos + 700, yPos + 90, '加入条件', 40);
		this.drawInput(context, xPos + 700 + context.measureText('加入条件').width + 40, yPos + 90, this.condition, 40, 'start');
		this.drawLabel(context, xPos + 30, yPos + 165, '募集要項', 40);
		this.drawSentence(context, xPos + 25, yPos + 230, this.guideline, 40, rectWidth, 0.93);
		this.drawLabel(context, xPos + 700, yPos + 165, '前クラバト順位', 40);
		if (this.rankingAvailable) {
			this.drawInput(context, xPos + 700 + context.measureText('前クラバト順位').width + 40, yPos + 165, this.ranking + '位', 40, 'start');
		}
		else {
			this.drawInput(context, xPos + 700 + context.measureText('前クラバト順位').width + 40, yPos + 165, '- 位', 40, 'start');
		}
	}

	drawLabel(context: CanvasRenderingContext2D, x: number, y: number, text: string, fontSize: number): void {
		context.font = this.labelFontStyle + ' ' + fontSize + `px '${this.labelFont}'`;
		if (this.labelBackgroundDisplayed === 'true') {
			context.fillStyle = this.labelBackgroundColor;
			context.beginPath();
			context.fillRect(x - 10, y - fontSize, context.measureText(text).width + 23, fontSize * 1.3);
		}
		context.fillStyle = this.labelFontColor;
		context.textAlign = 'start';
		context.textBaseline = 'alphabetic';
		context.fillText(text, x, y);
	}

	drawInput(context: CanvasRenderingContext2D, x: number, y: number, text: string, fontSize: number, textAlign: CanvasTextAlign): void {
		context.textAlign = textAlign as CanvasTextAlign;
		context.textBaseline = 'alphabetic';
		context.font = this.inputFontStyle + ' ' + fontSize + `px '${this.inputFont}'`;
		context.fillStyle = this.inputFontColor;
		context.fillText(text, x, y);
	}

	drawSentence(context: CanvasRenderingContext2D, x: number, y: number, text: string, fontSize: number, rectWidth: number, breakRatio: number): void {
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
	}

	drawPane(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number): void {
		const rgb = this.convertHexToRgb(this.paneColor);
		context.beginPath();
		context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${this.paneTransparency})`;
		context.fillRect(x, y, width, height);
		if (this.paneFrameDisplayed === 'true') {
			context.strokeStyle = this.paneFrameColor;
			context.lineWidth = parseInt(this.paneFrameWidth);
			context.strokeRect(x, y, width, height);
		}
	}

	resetBasicSetting(): void {
		this.thumbnailIndex = 62;
		this.clanName = 'もっと美食殿';
		this.averageLevel = 200;
		this.memberNum = 25;
		this.policy = 'わいわいプレイ';
		this.condition = '誰でも加入';
		this.guideline = '美食殿の活動目的は、この世の美味しい物の探求です！';
		this.rankingAvailable =  true;
		this.ranking = 3000;
		this.position = 1;
		this.previewCard();
	}

	resetClanNameSetting(): void {
		this.clanNameFont = this.initialFont;
		this.clanNameFontSize = 100;
		this.clanNameFontStyles = ['bold'];
		this.clanNameOutlineDisplayed = 'true';
		this.clanNameStrokeColor = '#FFFFFF';
		this.clanNameOutlineWidth = '10';
		this.clanNameFillColor = '#000000';
		this.clanNameFillColorTransparency = '1.0';
		this.previewCard();
	}

	resetLabelSetting(): void {
		this.labelFont = this.initialFont;
		this.labelFontStyles = ['bold'];
		this.labelFontColor = '#FFFFFF';
		this.labelBackgroundDisplayed = 'true';
		this.labelBackgroundColor = '#000000';
		this.previewCard();
	}

	resetInputSetting(): void {
		this.inputFont = this.initialFont;
		this.inputFontStyles = ['bold'];
		this.inputFontColor = '#000000';
		this.previewCard();
	}

	resetPaneSetting(): void {
		this.paneFrameDisplayed = 'false';
		this.paneFrameColor = '#000000'
		this.paneFrameWidth = '3';
		this.paneColor = '#FFFFFF';
		this.paneTransparency = '0.6';
		this.previewCard();
	}

	resetBackgroundImage(): void {
		this.backgroundImageTransparency = '1.0';
		this.previewCard();
	}

	resetAllSettings(): void {
		this.resetBasicSetting();
		this.resetClanNameSetting();
		this.resetLabelSetting();
		this.resetInputSetting();
		this.resetPaneSetting();
		this.resetBackgroundImage();
		UIkit.notification({
			message: '全設定をリセットしました',
			pos: 'top-center',
			timeout: 3000
		});
	}

	convertHexToRgb(hex: string): number[] {
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
	}
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
