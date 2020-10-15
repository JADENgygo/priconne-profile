document.addEventListener('DOMContentLoaded', () => {
	const component = {
		mounted: function() {
			document.getElementById('background-image').addEventListener('load', () => {
				this.previewCard();
			});
		},
		data: function() {
			return {
				backgroundImageNames: [
					'hatsunes_present_strategy0.png', 'hatsunes_present_strategy1.png', 'hatsunes_present_strategy2.png', 'little_lyrical_adventure0.png', 'little_lyrical_adventure1.png', 'little_lyrical_adventure2.png',
					'vampire_hunter_with_ilya0.png', 'dangerous_vacance_beach_gourmet_princess0.png', 'dangerous_vacance_beach_gourmet_princess1.png', 'dangerous_vacance_beach_gourmet_princess2.png',
					'tamaki_and_mihuyu_uninhabited_island_zero_rupi_life0.png', 'black_iron_nightmare0.png', 'black_iron_nightmare1.png', 'black_iron_nightmare2.png', 'trick_or_pudding_unity_halloween_party0.png',
					'trick_or_pudding_unity_halloween_party1.png', 'twilight_breakers0.png', 'twilight_breakers1.png', 'carol_oblivion0.png', 'carol_oblivion1.png', 'carol_oblivion2.png', 'carol_oblivion3.png',
					'new_year_twinkle_crisis0.png', 'new_year_twinkle_crisis1.png', 'new_year_twinkle_crisis2.png', 'battle_of_valentine0.png', 'battle_of_valentine1.png', 'battle_of_valentine2.png', 'royal_capital_detective0.png',
					'royal_capital_detective1.png', 'royal_capital_detective2.png', 'twin_flowers_bloomed_in_asturm0.png', 'shogun_travelogue0.png', 'shogun_travelogue1.png', 'shogun_travelogue2.png', 'shogun_travelogue3.png',
					'shogun_travelogue4.png', 'shogun_travelogue5.png', 'shogun_travelogue6.png', 'shogun_travelogue7.png', 'shogun_travelogue8.png', 'shogun_travelogue9.png', 'suzunas_rainbow_stage0.png',
					'suzunas_rainbow_stage1.png', 'suzunas_rainbow_stage2.png', 'summer_mahomaho_kingdom0.png', 'summer_mahomaho_kingdom1.png', 'summer_mahomaho_kingdom2.png', 'summer_mahomaho_kingdom3.png',
					'forest_coward_and_holy_schools_lyceenne0.png', 'forest_coward_and_holy_schools_lyceenne1.png', 'forest_coward_and_holy_schools_lyceenne2.png', 'little_brave_halloween_night0.png',
					'little_brave_halloween_night1.png', 'little_brave_halloween_night2.png', 'dragons_explorers0.png', 'dragons_explorers1.png', 'dragons_explorers2.png', 'dragons_explorers3.png', 'present_panic0.png',
					'present_panic1.png', 'present_panic2.png', 'landsol_guild_race0.png', 'landsol_guild_race1.png', 'landsol_guild_race2.png', 'landsol_guild_race3.png', 'magical_girl0.png', 'magical_girl1.png',
					'angel_and_holy_schools_lyceenne0.png', 'angel_and_holy_schools_lyceenne1.png', 'angel_and_holy_schools_lyceenne2.png', 'ranch_four_farmers0.png', 'ranch_four_farmers1.png', 'rino_in_wonderland0.png',
					'rino_in_wonderland1.png', 'tanabata_story0.png', 'tanabata_story1.png', 'tanabata_story2.png', 'misatos_summer_yell0.png', 'misatos_summer_yell1.png', 'misatos_summer_yell2.png', 'misatos_summer_yell3.png',
					'misatos_summer_yell4.png', 'happy_change_angels0.png', 'happy_change_angels1.png', 'happy_change_angels2.png'
				],
				backgroundImagePath: 'img/hatsunes_present_strategy0.png',
				clanName: 'おひるねくらぶ',
				averageLevel: 175,
				memberCount: 30,
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
				inputFont: 'ＭＳ ゴシック',
				inputFontStyles: ['bold'],
				inputFontColor: '#000000',
				clanNameFont: 'メイリオ',
				clanNameFontSize: 100,
				clanNameFontStyles: ['bold'],
				clanNameOutlineDisplayed: 'true',
				clanNameStrokeColor: '#000000',
				clanNameOutlineWidth: '10',
				clanNameFillColor: '#3264FF',
				clanNameFillColorTransparency: '1.0',
				labelFont: 'ＭＳ ゴシック',
				labelFontStyles: ['bold'],
				labelFontColor: '#FFFFFF',
				labelBackgroundDisplayed: 'true',
				labelBackgroundColor: '#6464FF',
				paneFrameDisplayed: 'true',
				paneFrameColor: '#000000',
				paneFrameWidth: '3',
				paneColor: '#FFFFFF',
				paneTransparency: '0.6',
				previewFixed: false,
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
		methods: {
			previewCard: function() {
				const canvas = document.getElementById('preview');
				const context = canvas.getContext('2d');
				const image = document.getElementById('background-image');
				context.drawImage(image, 0, 0);
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
				const rgb = this.convertHexToRgb(this.paneColor);
				context.textBaseline = 'alphabetic';
				context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${this.paneTransparency})`;
				context.beginPath();
				context.fillRect(xPos, yPos - 50, rectWidth, canvasHeight * 2.98 / 4.0);
				if (this.paneFrameDisplayed === 'true') {
					context.strokeStyle = this.paneFrameColor;
					context.lineWidth = this.paneFrameWidth;
					context.strokeRect(xPos, yPos - 50, rectWidth, canvasHeight * 2.98 / 4.0);
				}

				let x = xPos + 30;
				let y = yPos + 15;
				let fontSize = 40;
				context.font = this.labelFontStyle + ' ' + fontSize + `px '${this.labelFont}'`;
				if (this.labelBackgroundDisplayed === 'true') {
					context.fillStyle = this.labelBackgroundColor;
					context.beginPath();
					context.fillRect(x - 10.0, y - fontSize, context.measureText('平均プレイヤーLv').width + 23.0, fontSize * 1.3);
				}
				context.fillStyle = this.labelFontColor;
				context.textAlign = 'start';
				context.fillText('平均プレイヤーLv', x, y);

				x = xPos + 30 + context.measureText('平均プレイヤーLv').width + 40;
				context.font = this.inputFontStyle + ' ' + fontSize + `px '${this.inputFont}'`;
				context.fillStyle = this.inputFontColor;
				context.fillText(this.averageLevel, x, y);

				x = xPos + 700;
				context.font = this.labelFontStyle + ' ' + fontSize + `px '${this.labelFont}'`;
				if (this.labelBackgroundDisplayed === 'true') {
					context.fillStyle = this.labelBackgroundColor;
					context.beginPath();
					context.fillRect(x - 10.0, y - fontSize, context.measureText('メンバー数').width + 23.0, fontSize * 1.3);
				}
				context.fillStyle = this.labelFontColor;
				context.fillText('メンバー数', x, y);

				x = xPos + 700 + context.measureText('メンバー数').width + 40;
				context.font = this.inputFontStyle + ' ' + fontSize + `px '${this.inputFont}'`;
				context.fillStyle = this.inputFontColor;
				context.fillText(this.memberCount, x, y);

				x = xPos + 30;
				y = yPos + 90;
				context.font = this.labelFontStyle + ' ' + fontSize + `px '${this.labelFont}'`;
				if (this.labelBackgroundDisplayed === 'true') {
					context.fillStyle = this.labelBackgroundColor;
					context.beginPath();
					context.fillRect(x - 10.0, y - fontSize, context.measureText('活動方針').width + 23.0, fontSize * 1.3);
				}
				context.fillStyle = this.labelFontColor;
				context.fillText('活動方針', x, y);

				x = xPos + 30 + context.measureText('活動方針').width + 40;
				context.font = this.inputFontStyle + ' ' + fontSize + `px '${this.inputFont}'`;
				context.fillStyle = this.inputFontColor;
				context.fillText(this.policy, x, y);

				x = xPos + 700;
				context.font = this.labelFontStyle + ' ' + fontSize + `px '${this.labelFont}'`;
				if (this.labelBackgroundDisplayed === 'true') {
					context.fillStyle = this.labelBackgroundColor;
					context.beginPath();
					context.fillRect(x - 10.0, y - fontSize, context.measureText('加入条件').width + 23.0, fontSize * 1.3);
				}
				context.fillStyle = this.labelFontColor;
				context.fillText('加入条件', x, y);

				x = xPos + 700 + context.measureText('加入条件').width + 40;
				context.font = this.inputFontStyle + ' ' + fontSize + `px '${this.inputFont}'`;
				context.fillStyle = this.inputFontColor;
				context.fillText(this.condition, x, y);

				x = xPos + 30;
				y = yPos + 165;
				context.font = this.labelFontStyle + ' ' + fontSize + `px '${this.labelFont}'`;
				if (this.labelBackgroundDisplayed === 'true') {
					context.fillStyle = this.labelBackgroundColor;
					context.beginPath();
					context.fillRect(x - 10.0, y - fontSize, context.measureText('募集要項').width + 23.0, fontSize * 1.3);
				}
				context.fillStyle = this.labelFontColor;
				context.fillText('募集要項', x, y);

				context.font = this.inputFontStyle + ' ' + fontSize + `px '${this.inputFont}'`;
				context.fillStyle = this.inputFontColor;
				x = xPos + 25;
				let row = 1;
				let splitPosition = 0;
				for (let i = 1; i <= this.guideline.length; ++i) {
					const w = context.measureText(this.guideline.substr(splitPosition, i - splitPosition)).width;
					if (rectWidth * 0.93 <= w || this.guideline[i - 1] === '\n') {
						y = (yPos + 230) + (row - 1) * 50.0;
						const s = this.guideline.substr(splitPosition, i - splitPosition);
						context.fillText(s, x, y);
						row++;
						splitPosition = i;
					}
					if (i === this.guideline.length) {
						y = (yPos + 230) + (row - 1) * 50.0;
						const s = this.guideline.substr(splitPosition, i - splitPosition);
						context.fillText(s, x, y);
					}
				}
			},
			drawPostscript: function(context, xPos, yPos, canvasWidth, canvasHeight) {
				const rectWidth = canvasWidth * 1.60 / 5.0;
				const rgb = this.convertHexToRgb(this.paneColor);
				context.textBaseline = 'alphabetic';
				context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${this.paneTransparency})`;
				context.beginPath();
				context.fillRect(xPos, yPos - 50, rectWidth, canvasHeight * 2.3 / 5.0);
				if (this.paneFrameDisplayed === 'true') {
					context.strokeStyle = this.paneFrameColor;
					context.lineWidth = this.paneFrameWidth;
					context.strokeRect(xPos, yPos - 50, rectWidth, canvasHeight * 2.3 / 5.0);
				}

				let x = xPos + 30;
				let y = yPos + 15;
				let fontSize = 40;
				context.font = this.labelFontStyle + ' ' + fontSize + `px '${this.labelFont}'`;
				if (this.labelBackgroundDisplayed === 'true') {
					context.fillStyle = this.labelBackgroundColor;
					context.beginPath();
					context.fillRect(x - 10.0, y - fontSize, context.measureText('追加情報').width + 23.0, fontSize * 1.3);
				}
				context.fillStyle = this.labelFontColor;
				context.textAlign = 'start';
				context.fillText('追加情報', x, y);

				context.font = this.inputFontStyle + ' ' + fontSize + `px '${this.inputFont}'`;
				context.fillStyle = this.inputFontColor;
				x = xPos + 20;
				let row = 1;
				let splitPosition = 0;
				for (let i = 1; i <= this.postscript.length; ++i) {
					const w = context.measureText(this.postscript.substr(splitPosition, i - splitPosition)).width;
					if (rectWidth * 0.88 <= w || this.postscript[i - 1] === '\n') {
						y = (yPos + 80) + (row - 1) * 50.0;
						const s = this.postscript.substr(splitPosition, i - splitPosition);
						context.fillText(s, x, y);
						row++;
						splitPosition = i;
					}
					if (i === this.postscript.length) {
						y = (yPos + 80) + (row - 1) * 50.0;
						const s = this.postscript.substr(splitPosition, i - splitPosition);
						context.fillText(s, x, y);
					}
				}
			},
			drawRanking: function(context, xPos, yPos, canvasWidth, canvasHeight) {
				const rgb = this.convertHexToRgb(this.paneColor);
				context.textBaseline = 'alphabetic';
				context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${this.paneTransparency})`;
				context.beginPath();
				context.fillRect(xPos, yPos - 50, canvasWidth * 1.60 / 5.0, canvasHeight * 1.17 / 5.0);
				if (this.paneFrameDisplayed === 'true') {
					context.strokeStyle = this.paneFrameColor;
					context.lineWidth = this.paneFrameWidth;
					context.strokeRect(xPos, yPos - 50, canvasWidth * 1.60 / 5.0, canvasHeight * 1.17 / 5.0);
				}

				for (let i = 0; i < 3; ++i) {
					const fontSize = 40;
					let x = xPos + 30;
					let y = yPos + 15 + 75 * i;
					context.font = this.labelFontStyle + ' ' + fontSize + `px '${this.labelFont}'`;
					if (this.labelBackgroundDisplayed === 'true') {
						context.fillStyle = this.labelBackgroundColor;
						context.beginPath();
						context.fillRect(x - 10.0, y - fontSize, context.measureText(this.rankingMonths[i] + 'のクラバト順位').width + 23.0, fontSize * 1.3);
					}
					context.textAlign = 'start';
					context.fillStyle = this.labelFontColor;
					context.fillText(this.rankingMonths[i] + 'のクラバト順位', x, y);

					x = xPos + 595;
					context.font = this.inputFontStyle + ' ' + fontSize + `px '${this.inputFont}'`;
					context.textAlign = 'end';
					context.fillStyle = this.inputFontColor;
					if (this.rankingsAvailable[i]) {
						context.fillText(this.rankings[i] + '位', x, y);
					}
					else {
						context.fillText('- 位', x, y);
					}
				}
			},
			resetInputSetting: function() {
				this.inputFont = 'ＭＳ ゴシック';
				this.inputFontStyles = ['bold'];
				this.inputFontColor = '#000000';
				this.previewCard();
			},
			resetClanNameSetting: function() {
				this.clanNameFont = 'メイリオ';
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
				this.labelFont = 'ＭＳ ゴシック';
				this.labelFontStyles = ['bold'];
				this.labelFontColor = '#FFFFFF';
				this.labelBackgroundDisplayed = 'true';
				this.labelBackgroundColor = '#6464FF';
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
			changePreviewFixing: function() {
				if (this.previewFixed) {
					const width = document.getElementById('spacer').getBoundingClientRect().width;
					const height = document.getElementById('spacer').getBoundingClientRect().height;
					const canvas = document.getElementById('preview');
					canvas.style.width = width + 'px';
					canvas.style.height = width * 9.0 / 16.0 + 'px';
					document.getElementById('spacer').style.height = document.getElementById('footer').clientHeight + 'px';
					document.getElementById('footer').style.position = 'fixed';
					document.getElementById('footer').style.bottom = '0';
				}
				else {
					document.getElementById('spacer').style.height = 0;
					document.getElementById('footer').style.position = 'static';
				}
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
			<div class="uk-container" id="container">
				<div class="uk-text-muted uk-margin-top uk-text-right">サイト作成者: <a class="uk-text-muted" href="https://twitter.com/JADENgygo">@JADENgygo</a></div>
				<div class="uk-text-lead uk-text-center uk-margin-top">クランプロフカード<span class="title-break">ジェネレーター</span></div>
				<ul uk-accordion>
					<li>
						<a class="uk-accordion-title" href="#">背景画像一覧</a>
						<div class="uk-accordion-content">
							<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small" uk-grid>
								<div v-for="(e, i) in backgroundImageNames">
									<form class="uk-form-stacked">
										<div class="uk-form-controls">
											<input v-bind:id="'image' + i" class="uk-radio" type="radio" v-model="backgroundImagePath" v-bind:value="'img/' + e" v-bind:checked="i === 0">
										</div>
										<label class="uk-form-label" v-bind:for="'image' + i"><img v-bind:src="'img/' + e"></label>
									</form>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<div class="uk-margin-top">背景画像</div>
				<div class="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid-small" uk-grid>
					<img id="background-image" width="1920" height="1080" v-bind:src="backgroundImagePath">
				</div>

				<form class="uk-form-stacked">
					<label for="clan-name" class="uk-form-label uk-margin-top">クラン名</label>
					<div class="uk-form-controls"><input id="clan-name" type="text" class="uk-input uk-form-small uk-form-width-medium" v-model="clanName" v-on:input="previewCard()"></div>
					<label for="average-level" class="uk-form-label uk-margin-top">平均プレイヤーLv</label>
					<div class="uk-form-controls"><input id="average-level" type="number" class="uk-input uk-form-small uk-form-width-small" v-model="averageLevel" v-on:input="previewCard()"></div>
					<label for="member-count" class="uk-form-label uk-margin-top">メンバー数</label>
					<div class="uk-form-controls">
						<select id="member-count" class="uk-select uk-form-small uk-form-width-xsmall" v-model="memberCount" v-on:change="previewCard()">
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
								<option v-for="e in 12" v-bind:selected="e + '月'=== rankingMonths[i - 1]">{{ e + '月' }}</option>
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
										<input class="uk-radio" type="radio" v-model="layout" v-bind:value="i - 1" v-on:change="previewCard()" v-bind:checked="i === 1">
										<img v-bind:src="'img/layout' + (i - 1) + '.png'">
									</label>
								</div>
							</div>

							<form class="uk-form-stacked">
								<hr class="uk-margin-top">
								<legend class="uk-legend">入力値 (クラン名以外)</legend>
								<label for="input-font" class="uk-form-label uk-margin-top">フォント</label>
								<div class="uk-form-controls">
									<select id="input-font" class="uk-select uk-form-small uk-form-width-large" v-model="inputFont" v-on:change="previewCard()">
										<option v-for="e in fonts" v-bind:selected="e === 'ＭＳ ゴシック'">{{ e }}</option>
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
								<legend class="uk-legend">クラン名</legend>
								<label for="clan-name-font" class="uk-margin-top uk-form-label">フォント</label>
								<div class="uk-form-controls">
									<select id="clan-name-font" class="uk-select uk-form-small uk-form-width-large" v-model="clanNameFont" v-on:change="previewCard()">
										<option v-for="e in fonts" v-bind:selected="e === 'メイリオ'">{{ e }}</option>
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
								<label for="label-font" class="uk-margin-top uk-form-label">フォント</label>
								<div class="uk-form-controls">
									<select id="label-font" class="uk-select uk-form-small uk-form-width-large" v-model="labelFont" v-on:change="previewCard()">
										<option v-for="e in fonts" v-bind:selected="e === 'ＭＳ ゴシック'">{{ e }}</option>
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
							</form>
						</div>
					</li>
				</ul>
				<div><button class="uk-button uk-button-default uk-button-small" v-on:click="saveCard()">カードを保存</button><div>
				<div id="spacer" class="uk-margin-top"></div>
				<div id="footer">
					<div>プレビュー<label class="uk-margin-left"><input type="checkbox" class="uk-checkbox" v-model="previewFixed" v-on:change="changePreviewFixing()"> 画面内に常に表示</label></div>
					<canvas id="preview" width="1920" height="1080"></canvas>
				</div>
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
