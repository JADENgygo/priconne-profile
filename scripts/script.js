document.addEventListener('DOMContentLoaded', () => {
	const component = {
		mounted: function() {
			//debug
			document.getElementById('clanName').value = "グルメパレス";
			document.getElementById('ranking0').value = 300;
			document.getElementById('ranking1').value = 3000;
			document.getElementById('ranking2').value = 30000;
			document.getElementById('averageLevel').value = 175;
			document.getElementById('memberCount').value = 30;
			document.getElementById('policy').value = 'わいわいプレイ';
			document.getElementById('guideline').value = 'プリコネを楽しんでいける仲間を募集しています！今は７５００位を目指しています！毎日３凸ってくれる人を募集しています！!(^^)!理由なく最終ログインが３日になる人は申し訳ございませんが、除名させていただきます。'
			+ 'プリコネを楽しんでいける仲間を募集しています！今は７５００位を目指しています！毎日３凸ってくれる人を募集しています！!(^^)!理由なく最終ログインが３日になる人は申し訳ございませんが、除名させていただきます。'
			+ 'プリコネを楽しんでいける仲間を募集しています！今は７５００位を目指しています！'
			+ 'プリコネを楽しんでいける仲間を募集しています！今は７５００位を目指しています！';
			document.getElementById('postscript').value = 'プリコネを楽しんでいける仲間を募集しています！今は７５００位を目指しています！毎日３凸ってくれる人を募集しています！!(^^)!理由なく最終ログインが３日になる人は申し訳ございませんが、除名させていただきます。';

			document.getElementById('backgroundImage').addEventListener('load', () => {
				this.previewCard();
			});
		},
		data: function() {
			return {
				backgroundImageNames: ['landsol_guild_race_0.png', 'happy_change_angels_0_horizontal.png', 'happy_change_angels_1_horizontal.png'],
				postscriptShowed: true,
				rankingShowed: true,
				inputFont: 'ＭＳ ゴシック',
				inputFontColor: '#000000',
				clanNameFont: 'メイリオ',
				clanNameFillColor: '#3264FF',
				clanNameStrokeColor: '#000000',
				labelFont: 'ＭＳ ゴシック',
				labelFontColor: '#FFFFFF',
				labelBackgroundColor: '#6464FF',
				frameColor: '#000000',
				paneColor: '#FFFFFF',
				paneTransparency: '0.6',
				layout: 0,
				fonts: [
					"AR BERKLEY", "AR BLANCA", "AR BONNIE", "AR CARTER", "AR CENA", "AR CHRISTY", "AR DARLING", "AR DECODE", "AR DELANEY", "AR DESTINE", "AR ESSENCE", "AR HERMANN", "AR JULIAN", "Arial", "Arial Black",
					"Arimo", "Bahnschrift", "Bahnschrift Condensed", "Bahnschrift Light", "Bahnschrift Light Condensed", "Bahnschrift Light SemiCondensed", "Bahnschrift SemiBold", "Bahnschrift SemiBold Condensed",
					"Bahnschrift SemiBold SemiConden", "Bahnschrift SemiCondensed", "Bahnschrift SemiLight", "Bahnschrift SemiLight Condensed", "Bahnschrift SemiLight SemiConde", "BIZ UDPゴシック", "BIZ UDP明朝 Medium",
					"BIZ UDゴシック", "BIZ UD明朝 Medium", "Calibri", "Calibri Light", "Cambria", "Cambria Math", "Candara", "Candara Light", "Comic Sans MS", "Consolas", "Constantia", "Corbel", "Corbel Light", "Courier New",
					"DejaVu Sans", "DejaVu Sans Condensed", "DejaVu Sans Light", "DejaVu Sans Mono", "DejaVu Serif", "DejaVu Serif Condensed", "Ebrima", "Franklin Gothic Medium", "Gabriola", "Gadugi", "Gentium Basic",
					"Gentium Book Basic", "Georgia", "HoloLens MDL2 Assets", "Impact", "Ink Free", "Javanese Text", "Leelawadee UI", "Leelawadee UI Semilight", "Lucida Bright", "Lucida Console", "Lucida Sans",
					"Lucida Sans Typewriter", "Lucida Sans Unicode", "Malgun Gothic", "Malgun Gothic Semilight", "Marlett", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft JhengHei Light",
					"Microsoft JhengHei UI", "Microsoft JhengHei UI Light", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft YaHei", "Microsoft YaHei Light",
					"Microsoft YaHei UI", "Microsoft YaHei UI Light", "Microsoft Yi Baiti", "MingLiU-ExtB", "MingLiU_HKSCS-ExtB", "Mongolian Baiti", "MS UI Gothic", "MV Boli", "Myanmar Text", "Nirmala UI",
					"Nirmala UI Semilight", "Noto Sans CJK JP Medium", "NSimSun", "OpenSymbol", "Palatino Linotype", "PMingLiU-ExtB", "Segoe MDL2 Assets", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Black",
					"Segoe UI Emoji", "Segoe UI Historic", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Semilight", "Segoe UI Symbol", "SimSun", "SimSun-ExtB", "Sitka Banner", "Sitka Display", "Sitka Heading",
					"Sitka Small", "Sitka Subheading", "Sitka Text", "Sylfaen", "Symbol", "Tahoma", "Tera Special", "Times New Roman", "Trebuchet MS", "UD デジタル 教科書体 N-B", "UD デジタル 教科書体 N-R",
					"UD デジタル 教科書体 NK-B", "UD デジタル 教科書体 NK-R", "UD デジタル 教科書体 NP-B", "UD デジタル 教科書体 NP-R", "Verdana", "Webdings", "Wingdings", "Yu Gothic UI", "Yu Gothic UI Light",
					"Yu Gothic UI Semibold", "Yu Gothic UI Semilight", "メイリオ", "游ゴシック", "游ゴシック Light", "游ゴシック Medium", "游明朝", "游明朝 Demibold", "游明朝 Light", "ＭＳ ゴシック", "ＭＳ 明朝",
					"ＭＳ Ｐゴシック", "ＭＳ Ｐ明朝"
				]
			};
		},
		computed: {
			prevMonths: function() {
				const now = new Date();
				return [
					new Date(now.getFullYear(), now.getMonth() - 1, 1).getMonth() + 1,
					new Date(now.getFullYear(), now.getMonth() - 2, 1).getMonth() + 1,
					new Date(now.getFullYear(), now.getMonth() - 3, 1).getMonth() + 1
				];
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
			}
		},
		methods: {
			selectBackgroundImage: function(imageName) {
				document.getElementById('backgroundImage').src = 'img/' + imageName;
				this.previewCard();
			},
			previewCard: function() {
				const canvas = document.getElementById('preview');
				const context = canvas.getContext('2d');
				const image = document.getElementById('backgroundImage');
				context.drawImage(image, 0, 0);
				// basicInfo, postscript, ranking
				const positions = [
					[[canvas.width * 2.0 / 90.0, canvas.height * 4.0 / 15.0], [canvas.width * 1.97 / 3.0, canvas.height * 4.0 / 15.0], [canvas.width * 1.97 / 3.0, canvas.height * 11.65 / 15.0]],
					[[canvas.width * 2.0 / 90.0, canvas.height * 4.0 / 15.0], [canvas.width * 1.97 / 3.0, canvas.height * 8.29 / 15.0], [canvas.width * 1.97 / 3.0, canvas.height * 4.0 / 15.0]],
					[[canvas.width * 1.135 / 3.0, canvas.height * 4.0 / 15.0], [canvas.width * 2.0 / 90.0, canvas.height * 4.0 / 15.0], [canvas.width * 2.0 / 90.0, canvas.height * 11.65 / 15.0]],
					[[canvas.width * 1.135 / 3.0, canvas.height * 4.0 / 15.0], [canvas.width * 2.0 / 90.0, canvas.height * 8.29 / 15.0], [canvas.width * 2.0 / 90.0, canvas.height * 4.0 / 15.0]],
					[[canvas.width * 1.0 / 5.0, canvas.height * 4.0 / 15.0], [null, null], [null, null]]
				];
				this.drawClanName(canvas, context, canvas.width / 2.0, canvas.height * 2.3 / 15.0);
				this.drawBasicInfo(canvas, context, positions[this.layout][0][0], positions[this.layout][0][1]);
				if (this.postscriptShowed && this.layout !== 4) {
					this.drawPostscript(canvas, context, positions[this.layout][1][0], positions[this.layout][1][1]);
				}
				if (this.rankingShowed && this.layout !== 4) {
					this.drawRanking(canvas, context, positions[this.layout][2][0], positions[this.layout][2][1]);
				}
			},
			drawClanName: function(canvas, context, xPos, yPos) {
				const fontSize = 100;
				context.font = 'bold ' + fontSize + `px '${this.clanNameFont}'`;
				context.textAlign = 'center';
				context.lineWidth = 10;
				context.strokeStyle = this.clanNameStrokeColor;
				context.strokeText(document.getElementById('clanName').value, xPos, yPos);
				context.fillStyle = this.clanNameFillColor;
				context.fillText(document.getElementById('clanName').value, xPos, yPos);
			},
			drawBasicInfo: function(canvas, context, xPos, yPos) {
				const rectWidth = canvas.width * 3.0 / 5.0;
				const rgb = this.convertHexToRgb(this.paneColor);
				context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${this.paneTransparency})`;
				context.beginPath();
				context.fillRect(xPos, yPos - 50, rectWidth, canvas.height * 2.98 / 4.0);
				context.strokeStyle = this.frameColor;
				context.lineWidth = 3;
				context.strokeRect(xPos, yPos - 50, rectWidth, canvas.height * 2.98 / 4.0);

				let x = xPos + 30;
				let y = yPos + 15;
				let fontSize = 40;
				context.font = 'bold ' + fontSize + `px '${this.labelFont}'`;
				context.fillStyle = this.labelBackgroundColor;
				context.beginPath();
				context.fillRect(x - 10.0, y - fontSize, context.measureText('平均プレイヤーLv').width + 23.0, fontSize * 1.3);
				context.fillStyle = this.labelFontColor;
				context.textAlign = 'start';
				context.fillText('平均プレイヤーLv', x, y);

				x = xPos + 30 + context.measureText('平均プレイヤーLv').width + 40;
				context.font = 'bold ' + fontSize + `px '${this.inputFont}'`;
				context.fillStyle = this.inputFontColor;
				context.fillText(document.getElementById('averageLevel').value, x, y);

				x = xPos + 700;
				context.font = 'bold ' + fontSize + `px '${this.labelFont}'`;
				context.fillStyle = this.labelBackgroundColor;
				context.beginPath();
				context.fillRect(x - 10.0, y - fontSize, context.measureText('メンバー数').width + 23.0, fontSize * 1.3);
				context.fillStyle = this.labelFontColor;
				context.fillText('メンバー数', x, y);

				x = xPos + 700 + context.measureText('メンバー数').width + 40;
				context.font = 'bold ' + fontSize + `px '${this.inputFont}'`;
				context.fillStyle = this.inputFontColor;
				context.fillText(document.getElementById('memberCount').value, x, y);

				x = xPos + 30;
				y = yPos + 90;
				context.font = 'bold ' + fontSize + `px '${this.labelFont}'`;
				context.fillStyle = this.labelBackgroundColor;
				context.beginPath();
				context.fillRect(x - 10.0, y - fontSize, context.measureText('活動方針').width + 23.0, fontSize * 1.3);
				context.fillStyle = this.labelFontColor;
				context.fillText('活動方針', x, y);

				x = xPos + 30 + context.measureText('活動方針').width + 40;
				context.font = 'bold ' + fontSize + `px '${this.inputFont}'`;
				context.fillStyle = this.inputFontColor;
				context.fillText(document.getElementById('policy').value, x, y);

				x = xPos + 700;
				context.font = 'bold ' + fontSize + `px '${this.labelFont}'`;
				context.fillStyle = this.labelBackgroundColor;
				context.beginPath();
				context.fillRect(x - 10.0, y - fontSize, context.measureText('加入条件').width + 23.0, fontSize * 1.3);
				context.fillStyle = this.labelFontColor;
				context.fillText('加入条件', x, y);

				let condition = '';
				Array.from(document.getElementsByName('condition')).forEach((e, i) => {
					if (!e.checked) {
						return;
					}
					switch (i) {
						case 0:
							condition = '誰でも加入';
							break;
						case 1:
							condition = '承認あり';
							break;
						default:
							condition = '勧誘のみ';
							break;
					}
				});
				x = xPos + 700 + context.measureText('加入条件').width + 40;
				context.font = 'bold ' + fontSize + `px '${this.inputFont}'`;
				context.fillStyle = this.inputFontColor;
				context.fillText(condition, x, y);

				x = xPos + 30;
				y = yPos + 165;
				context.font = 'bold ' + fontSize + `px '${this.labelFont}'`;
				context.fillStyle = this.labelBackgroundColor;
				context.beginPath();
				context.fillRect(x - 10.0, y - fontSize, context.measureText('募集要項').width + 23.0, fontSize * 1.3);
				context.fillStyle = this.labelFontColor;
				context.fillText('募集要項', x, y);

				const guideline = document.getElementById('guideline').value;
				context.font = 'bold ' + fontSize + `px '${this.inputFont}'`;
				context.fillStyle = this.inputFontColor;
				x = xPos + 25;
				let row = 1;
				let splitPosition = 0;
				for (let i = 1; i <= guideline.length; ++i) {
					const w = context.measureText(guideline.substr(splitPosition, i - splitPosition)).width;
					if (rectWidth * 0.93 <= w || guideline[i - 1] === '\n') {
						y = (yPos + 230) + (row - 1) * 50.0;
						const s = guideline.substr(splitPosition, i - splitPosition);
						context.fillText(s, x, y);
						row++;
						splitPosition = i;
					}
					if (i === guideline.length) {
						y = (yPos + 230) + (row - 1) * 50.0;
						const s = guideline.substr(splitPosition, i - splitPosition);
						context.fillText(s, x, y);
					}
				}
			},
			drawPostscript: function(canvas, context, xPos, yPos) {
				const rectWidth = canvas.width * 1.60 / 5.0;
				const rgb = this.convertHexToRgb(this.paneColor);
				context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${this.paneTransparency})`;
				context.beginPath();
				context.fillRect(xPos, yPos - 50, rectWidth, canvas.height * 2.3 / 5.0);
				context.strokeStyle = this.frameColor;
				context.lineWidth = 3;
				context.strokeRect(xPos, yPos - 50, rectWidth, canvas.height * 2.3 / 5.0);

				let x = xPos + 30;
				let y = yPos + 15;
				let fontSize = 40;
				context.font = 'bold ' + fontSize + `px '${this.labelFont}'`;
				context.fillStyle = this.labelBackgroundColor;
				context.beginPath();
				context.fillRect(x - 10.0, y - fontSize, context.measureText('追加情報').width + 23.0, fontSize * 1.3);
				context.fillStyle = this.labelFontColor;
				context.textAlign = 'start';
				context.fillText('追加情報', x, y);

				const postscript = document.getElementById('postscript').value;
				context.font = 'bold ' + fontSize + `px '${this.inputFont}'`;
				context.fillStyle = this.inputFontColor;
				x = xPos + 20;
				let row = 1;
				let splitPosition = 0;
				for (let i = 1; i <= postscript.length; ++i) {
					const w = context.measureText(postscript.substr(splitPosition, i - splitPosition)).width;
					if (rectWidth * 0.88 <= w || postscript[i - 1] === '\n') {
						y = (yPos + 80) + (row - 1) * 50.0;
						const s = postscript.substr(splitPosition, i - splitPosition);
						context.fillText(s, x, y);
						row++;
						splitPosition = i;
					}
					if (i === postscript.length) {
						y = (yPos + 80) + (row - 1) * 50.0;
						const s = postscript.substr(splitPosition, i - splitPosition);
						context.fillText(s, x, y);
					}
				}
			},
			drawRanking: function(canvas, context, xPos, yPos) {
				const rgb = this.convertHexToRgb(this.paneColor);
				context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${this.paneTransparency})`;
				context.beginPath();
				context.fillRect(xPos, yPos - 50, canvas.width * 1.60 / 5.0, canvas.height * 1.17 / 5.0);
				context.strokeStyle = this.frameColor;
				context.lineWidth = 3;
				context.strokeRect(xPos, yPos - 50, canvas.width * 1.60 / 5.0, canvas.height * 1.17 / 5.0);

				const fontSize = 40;
				for (let i = 0; i < 3; ++i) {
					let x = xPos + 30;
					let y = yPos + 15 + 75 * i;
					const rankingMonth = document.getElementById('rankingMonth' + i ).value
					context.font = 'bold ' + fontSize + `px '${this.labelFont}'`;
					context.fillStyle = this.labelBackgroundColor;
					context.beginPath();
					context.fillRect(x - 10.0, y - fontSize, context.measureText(rankingMonth + 'のクラバト順位').width + 23.0, fontSize * 1.3);
					context.textAlign = 'start';
					context.fillStyle = this.labelFontColor;
					context.fillText(rankingMonth + 'のクラバト順位', x, y);

					x = xPos + 595;
					context.font = 'bold ' + fontSize + `px '${this.inputFont}'`;
					context.textAlign = 'end';
					context.fillStyle = this.inputFontColor;
					if (document.getElementById('rankingChecked' + i).checked) {
						context.fillText(document.getElementById('ranking' + i).value + '位', x, y);
					}
					else {
						context.fillText('- 位', x, y);
					}
				}
			},
			showPostscript: function(showed) {
				this.postscriptShowed = showed;
				this.previewCard();
			},
			showRanking: function(showed) {
				this.rankingShowed = showed;
				this.previewCard();
			},
			setLayout: function(layout) {
				this.layout = layout;
				this.previewCard();
			},
			setInputFont: function(font) {
				this.inputFont = font;
				this.previewCard();
			},
			resetInputFont: function(font) {
				document.getElementById('inputFont').value = font;
				this.setInputFont(font);
			},
			setInputFontColor: function(color) {
				this.inputFontColor = color;
				this.previewCard();
			},
			resetInputFontColor: function(color) {
				document.getElementById('inputFontColor').value = color;
				this.setInputFontColor(color);
			},
			setClanNameFont: function(font) {
				this.clanNameFont = font;
				this.previewCard();
			},
			resetClanNameFont: function(font) {
				document.getElementById('clanNameFont').value = font;
				this.setClanNameFont(font);
			},
			setClanNameFillColor: function(color) {
				this.clanNameFillColor = color;
				this.previewCard();
			},
			resetClanNameFillColor: function(color) {
				document.getElementById('clanNameFillColor').value = color;
				this.setClanNameFillColor(color);
			},
			setClanNameStrokeColor: function(color) {
				this.clanNameStrokeColor = color;
				this.previewCard();
			},
			resetClanNameStrokeColor: function(color) {
				document.getElementById('clanNameStrokeColor').value = color;
				this.setClanNameStrokeColor(color);
			},
			setLabelFont: function(font) {
				this.labelFont = font;
				this.previewCard();
			},
			resetLabelFont: function(font) {
				document.getElementById('labelFont').value = font;
				this.setLabelFont(font);
			},
			setLabelFontColor: function(color) {
				this.labelFontColor = color;
				this.previewCard();
			},
			resetLabelFontColor: function(color) {
				document.getElementById('labelFontColor').value = color;
				this.setLabelFontColor(color);
			},
			setLabelBackgroundColor: function(color) {
				this.labelBackgroundColor = color;
				this.previewCard();
			},
			resetLabelBackgroundColor: function(color) {
				document.getElementById('labelBackgroundColor').value = color;
				this.setLabelBackgroundColor(color);
			},
			setFrameColor: function(color) {
				this.frameColor = color;
				this.previewCard();
			},
			resetFrameColor: function(color) {
				document.getElementById('frameColor').value = color;
				this.setFrameColor(color);
			},
			setPaneColor: function(color) {
				this.paneColor = color;
				this.previewCard();
			},
			resetPaneColor: function(color) {
				document.getElementById('paneColor').value = color;
				this.setPaneColor(color);
			},
			setPaneTransparency: function(transparency) {
				this.paneTransparency = transparency;
				this.previewCard();
			},
			resetPaneTransparency: function(transparency) {
				document.getElementById('paneTransparency').value = transparency;
				this.setPaneTransparency(transparency);
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
			saveCard: function() {
				const canvas = document.getElementById('preview');
				const a = document.createElement('a');
				a.href = canvas.toDataURL('image/png');
				a.download = 'clan_profile_card.png';
				a.click();
			}
		},
		template: `
			<div class="uk-container">
				<div class="uk-text-lead uk-text-center uk-margin-top">クランプロフカードジェネレーター</div>
				<ul uk-accordion>
					<li>
						<a class="uk-accordion-title" href="#">背景画像一覧</a>
						<div class="uk-accordion-content">
							<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-medium" uk-grid>
								<div v-for="e in backgroundImageNames">
									<img v-bind:src="'img/' + e" v-on:click="selectBackgroundImage(e)">
								</div>
							</div>
						</div>
					</li>
				</ul>
				<div class="uk-margin-top">背景画像</div>
				<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-medium uk-margin-top" uk-grid>
					<img id="backgroundImage" width="1920" height="1080" v-bind:src="'img/' + backgroundImageNames[0]">
				</div>
				<div class="uk-margin-top"><label for="clanName">クラン名</label></div>
				<div><input id="clanName" type="text" class="uk-input uk-form-small uk-form-width-medium" v-on:input="previewCard()"></div>
				<div class="uk-margin-top"><label for="averageLevel">平均プレイヤーLv</label></div>
				<div><input id="averageLevel" type="number" class="uk-input uk-form-small uk-form-width-small" v-on:input="previewCard()"></div>
				<div class="uk-margin-top"><label for="memberCount">メンバー数</label></div>
				<select id="memberCount" class="uk-select uk-form-small uk-form-width-xsmall" v-on:change="previewCard()">
					<option v-for="i in 30">{{ i }}</option>
				</select>
				<div class="uk-margin-top"><label for="policy">活動方針</label></div>
				<div><input id="policy" type="text" class="uk-input uk-form-small uk-form-width-medium" v-on:input="previewCard()"></div>
				<div class="uk-margin-top">加入条件</div>
				<div>
					<span class="condition uk-margin-small-right">
						<input id="anybody" class="uk-radio" type="radio" v-on:change="previewCard()" name="condition" checked>
						<label for="anybody">誰でも加入</label>
					</span>
					<span class="condition uk-margin-small-right">
						<input id="approval" class="uk-radio" type="radio" v-on:change="previewCard()" name="condition">
						<label for="approval">承認あり</label>
					</span>
					<span class="condition">
						<input id="invitation" class="uk-radio" type="radio" v-on:change="previewCard()" name="condition">
						<label for="invitation">勧誘のみ</label>
					</span>
				</div>
				<div class="uk-margin-top"><label for="guideline">募集要項</label></div>
				<div><textarea id="guideline" class="uk-textarea" rows="5" v-on:input="previewCard()"></textarea><div>
				<div class="uk-margin-top">追加情報の表示</div>
				<input id="postscriptShow" class="uk-radio" type="radio" name="postscriptDisplay" v-on:change="showPostscript(true)" checked>
				<label for="postscriptShow" class="uk-margin-small-right">表示する</label>
				<input id="postscriptHidden" class="uk-radio" type="radio" name="postscriptDisplay" v-on:change="showPostscript(false)">
				<label for="postscriptHidden">表示しない</label>
				<div class="uk-margin-top"><label for="postscript">追加情報</label></div>
				<div><textarea id="postscript" class="uk-textarea" rows="5" v-on:input="previewCard()"></textarea><div>
				<div class="uk-margin-top">クラバト順位の表示</div>
				<div>
					<input id="rankingShow" class="uk-radio" type="radio" name="rankingDisplay" v-on:change="showRanking(true)" checked>
					<label for="rankingShow" class="uk-margin-small-right">表示する</label>
					<input id="rankingHidden" class="uk-radio" type="radio" name="rankingDisplay" v-on:change="showRanking(false)">
					<label for="rankingHidden" class="uk-margin-small-right">表示しない</label>
				</div>
				<div class="uk-margin-top">クラバト順位<div>
				<div v-for="i in 3" class="uk-margin-small-bottom">
					<input v-bind:id="'rankingChecked' + (i - 1)" class="uk-checkbox" type="checkbox" v-on:change="previewCard()" checked>
					<select v-bind:id="'rankingMonth' + (i - 1)" class="uk-select uk-form-small uk-form-width-xsmall" v-on:change="previewCard()">
						<option v-for="e in 12" v-bind:selected="e === prevMonths[i - 1]">{{ e + '月' }}</option>
					</select>
					<input v-bind:id="'ranking' + (i - 1)" type="number" class="uk-input uk-form-small uk-form-width-small" v-on:input="previewCard()">
					<span>位</span>
				</div>
				<ul uk-accordion>
					<li class="uk-open">
						<a class="uk-accordion-title" href="#">詳細設定</a>
						<div class="uk-accordion-content">
							<div>レイアウト</div>
							<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-medium" uk-grid>
								<div v-for="i in 5">
									<label>
										<input v-bind:id="'layout' + (i - 1)" class="uk-radio uk-text-center" type="radio" name="layout" v-on:change="setLayout(i - 1)" v-bind:checked="i === 1">
										<img v-bind:src="'img/layout' + (i - 1) + '.png'">
									</label>
								</div>
							</div>
							<div class="uk-margin-top"><label for="inputFont">入力値のフォント (クラン名を除く)</label></div>
							<select id="inputFont" class="uk-select uk-form-small uk-form-width-large" v-on:change="setInputFont($event.target.value)">
								<option v-for="e in fonts" v-bind:selected="e === 'ＭＳ ゴシック'">{{ e }}</option>
							</select>
							<button class="uk-button uk-button-default uk-button-small" v-on:click="resetInputFont('ＭＳ ゴシック')">リセット</button>
							<div class="uk-margin-top"><label for="inputFontColor">入力値の文字色 (クラン名を除く)</label></div>
							<input id="inputFontColor" type="color" value="#000000" class="uk-margin-right" v-on:input="setInputFontColor($event.target.value)">
							<button class="uk-button uk-button-default uk-button-small" v-on:click="resetInputFontColor('#000000')">リセット</button>
							<div class="uk-margin-top"><label for="clanNameFont">クラン名のフォント</label></div>
							<select id="clanNameFont" class="uk-select uk-form-small uk-form-width-large" v-on:change="setClanNameFont($event.target.value)">
								<option v-for="e in fonts" v-bind:selected="e === 'メイリオ'">{{ e }}</option>
							</select>
							<button class="uk-button uk-button-default uk-button-small" v-on:click="resetClanNameFont('メイリオ')">リセット</button>
							<div class="uk-margin-top"><label for="clanNameStrokeColor">クラン名の輪郭色</label></div>
							<input id="clanNameStrokeColor" type="color" value="#000000" class="uk-margin-right" v-on:input="setClanNameStrokeColor($event.target.value)">
							<button class="uk-button uk-button-default uk-button-small" v-on:click="resetClanNameStrokeColor('#000000')">リセット</button>
							<div class="uk-margin-top"><label for="clanNameFillColor">クラン名の塗り潰し色</label></div>
							<input id="clanNameFillColor" type="color" value="#3264FF" class="uk-margin-right" v-on:input="setClanNameFillColor($event.target.value)">
							<button class="uk-button uk-button-default uk-button-small" v-on:click="resetClanNameFillColor('#3264FF')">リセット</button>
							<div class="uk-margin-top"><label for="labelFont">ラベルのフォント</label></div>
							<select id="labelFont" class="uk-select uk-form-small uk-form-width-large" v-on:change="setLabelFont($event.target.value)">
								<option v-for="e in fonts" v-bind:selected="e === 'ＭＳ ゴシック'">{{ e }}</option>
							</select>
							<button class="uk-button uk-button-default uk-button-small" v-on:click="resetLabelFont('ＭＳ ゴシック')">リセット</button>
							<div class="uk-margin-top"><label for="labelFontColor">ラベルの文字色</label></div>
							<input id="labelFontColor" type="color" value="#FFFFFF" class="uk-margin-right" v-on:input="setLabelFontColor($event.target.value)">
							<button class="uk-button uk-button-default uk-button-small" v-on:click="resetLabelFontColor('#FFFFFF')">リセット</button>
							<div class="uk-margin-top"><label for="labelBackgroundColor">ラベルの背景色</label></div>
							<input id="labelBackgroundColor" type="color" value="#6464FF" class="uk-margin-right" v-on:input="setLabelBackgroundColor($event.target.value)">
							<button class="uk-button uk-button-default uk-button-small" v-on:click="resetLabelBackgroundColor('#6464FF')">リセット</button>
							<div class="uk-margin-top"><label for="frameColor">枠の色</label></div>
							<input id="frameColor" type="color" value="#000000" class="uk-margin-right" v-on:input="setFrameColor($event.target.value)">
							<button class="uk-button uk-button-default uk-button-small" v-on:click="resetFrameColor('#000000')">リセット</button>
							<div class="uk-margin-top"><label for="paneColor">ペインの背景色</label></div>
							<input id="paneColor" type="color" value="#FFFFFF" class="uk-margin-right" v-on:input="setPaneColor($event.target.value)">
							<button class="uk-button uk-button-default uk-button-small" v-on:click="resetPaneColor('#FFFFFF')">リセット</button>
							<div class="uk-margin-top"><label for="paneTransparency">ペインの透明度</label></div>
							<label for="paneTransparency" id="paneTransparencyLabel">{{ formattedPaneTransparency }}</label>
							<input id="paneTransparency" type="range" min="0.0" max="1.0" step="0.1" value="0.6" class="uk-range uk-form-small uk-form-width-small uk-margin-right" v-on:input="setPaneTransparency($event.target.value)">
							<button class="uk-button uk-button-default uk-button-small" v-on:click="resetPaneTransparency('0.6')">リセット</button>
						</div>
					</li>
				</ul>
				<div class="uk-margin-top">プレビュー</div>
				<canvas id="preview" width="1920" height="1080"></canvas>
				<div class="uk-margin-top"><button class="uk-button uk-button-default uk-button-small" v-on:click="saveCard()">カードを保存</button><div>
			</div>
		`
	};
	new Vue({
		el: '#app',
		components: {
			component
		},
		template: `
			<component></component>
		`
	});
});
