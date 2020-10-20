document.addEventListener('DOMContentLoaded', () => {
	class FontDetector {
		constructor(testAlphabet, testJapanese) {
			this.baseFonts = ['monospace', 'sans-serif', 'serif'];
			this.testStrings = [testAlphabet, testJapanese];
			this.defaultWidth = [{}, {}];
			this.defaultHeight = [{}, {}];
			const body = document.getElementsByTagName("body")[0];
			const span = document.createElement("span");
			span.style.visibility = 'hidden';
			span.style.fontSize = '72px';
			for (let i = 0; i < 2; ++i) {
				span.textContent = this.testStrings[i];
				for (let e of this.baseFonts) {
					span.style.fontFamily = e;
					body.appendChild(span);
					this.defaultWidth[i][e] = span.offsetWidth;
					this.defaultHeight[i][e] = span.offsetHeight;
					body.removeChild(span);
				}
			}
		}
		detect(font) {
			let detected = false;
			const body = document.getElementsByTagName("body")[0];
			const span = document.createElement("span");
			span.style.visibility = 'hidden';
			span.style.fontSize = '72px';
			outerFor:
			for (let i = 0; i < 2; ++i) {
				span.textContent = this.testStrings[i];
				for (let e of this.baseFonts) {
					span.style.fontFamily = font + ',' + e;
					body.appendChild(span);
					detected = (span.offsetWidth != this.defaultWidth[i][e]) || (span.offsetHeight != this.defaultHeight[i][e]);
					body.removeChild(span);
					if (detected) {
						break outerFor;
					}
				}
			}
			return detected;
		}
	}
	const fontDetector = new FontDetector('mmmmmmmmmmlli12-', 'あぱプ字１－＾｜＿！＜％＄ｚＡ');
	const fonts = [
		"AR BERKLEY", "AR BLANCA", "AR BONNIE", "AR CARTER", "AR CENA", "AR CHRISTY", "AR DARLING", "AR DECODE", "AR DELANEY", "AR DESTINE", "AR ESSENCE", "AR HERMANN", "AR JULIAN", "Arial", "Arial Black",
		"Arimo", "Bahnschrift", "Bahnschrift Condensed", "Bahnschrift Light", "Bahnschrift Light Condensed", "Bahnschrift Light SemiCondensed", "Bahnschrift SemiBold", "Bahnschrift SemiBold Condensed",
		"Bahnschrift SemiBold SemiConden", "Bahnschrift SemiCondensed", "Bahnschrift SemiLight", "Bahnschrift SemiLight Condensed", "Bahnschrift SemiLight SemiConde", "BIZ UDPゴシック", "BIZ UDP明朝 Medium",
		"BIZ UDゴシック", "BIZ UD明朝 Medium", "Calibri", "Calibri Light", "Cambria", "Cambria Math", "Candara", "Candara Light", "Comic Sans MS", "Consolas", "Constantia", "Corbel", "Corbel Light", "Courier New",
		"DejaVu Sans", "DejaVu Sans Condensed", "DejaVu Sans Light", "DejaVu Sans Mono", "DejaVu Serif", "DejaVu Serif Condensed", "Ebrima", "Franklin Gothic Medium", "Gabriola", "Gadugi", "Gentium Basic",
		"Gentium Book Basic", "Georgia", "HoloLens MDL2 Assets", "Impact", "Ink Free", "Javanese Text", "Leelawadee UI", "Leelawadee UI Semilight", "Lucida Bright", "Lucida Console", "Lucida Sans",
		"Lucida Sans Typewriter", "Lucida Sans Unicode", "Malgun Gothic", "Malgun Gothic Semilight", "Marlett", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft JhengHei Light",
		"Microsoft JhengHei UI", "Microsoft JhengHei UI Light", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft YaHei", "Microsoft YaHei Light",
		"Microsoft YaHei UI", "Microsoft YaHei UI Light", "Microsoft Yi Baiti", "MingLiU-ExtB", "MingLiU_HKSCS-ExtB", "Mongolian Baiti", 'monospace', "MS UI Gothic", "MV Boli", "Myanmar Text", "Nirmala UI",
		"Nirmala UI Semilight", "Noto Sans CJK JP Medium", "NSimSun", "OpenSymbol", "Palatino Linotype", "PMingLiU-ExtB", 'sans-serif', 'serif', "Segoe MDL2 Assets", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Black",
		"Segoe UI Emoji", "Segoe UI Historic", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Semilight", "Segoe UI Symbol", "SimSun", "SimSun-ExtB", "Sitka Banner", "Sitka Display", "Sitka Heading",
		"Sitka Small", "Sitka Subheading", "Sitka Text", "Sylfaen", "Symbol", "Tahoma", "Tera Special", "Times New Roman", "Trebuchet MS", "UD デジタル 教科書体 N-B", "UD デジタル 教科書体 N-R",
		"UD デジタル 教科書体 NK-B", "UD デジタル 教科書体 NK-R", "UD デジタル 教科書体 NP-B", "UD デジタル 教科書体 NP-R", "Verdana", "Webdings", "Wingdings", "Yu Gothic UI", "Yu Gothic UI Light",
		"Yu Gothic UI Semibold", "Yu Gothic UI Semilight", "メイリオ", "游ゴシック", "游ゴシック Light", "游ゴシック Medium", "游明朝", "游明朝 Demibold", "游明朝 Light", "ＭＳ ゴシック", "ＭＳ 明朝",
		"ＭＳ Ｐゴシック", "ＭＳ Ｐ明朝"
	];
	const component = {
		created: function() {
			this.backgroundImagePath = localStorage.getItem('backgroundImagePath') === null ? this.backgroundImagePath : localStorage.getItem('backgroundImagePath');
			this.clanName = localStorage.getItem('clanName') === null ? this.clanName : localStorage.getItem('clanName');
			if (localStorage.getItem('averageLevel') !== null) {
				if (localStorage.getItem('averageLevel') === '') {
					this.averageLevel = '';
				}
				else {
					this.averageLevel = parseInt(localStorage.getItem('averageLevel'));
				}
			}
			this.memberCount = localStorage.getItem('memberCount') === null ? this.memberCount : parseInt(localStorage.getItem('memberCount'));
			this.policy = localStorage.getItem('policy') === null ? this.policy : localStorage.getItem('policy');
			this.condition = localStorage.getItem('condition') === null ? this.condition : localStorage.getItem('condition');
			this.guideline = localStorage.getItem('guideline') === null ? this.guideline : localStorage.getItem('guideline');
			this.postscriptDisplayed = localStorage.getItem('postscriptDisplayed') === null ? this.postscriptDisplayed : localStorage.getItem('postscriptDisplayed');
			this.postscript = localStorage.getItem('postscript') === null ? this.postscript : localStorage.getItem('postscript');
			this.rankingDisplayed = localStorage.getItem('rankingDisplayed') === null ? this.rankingDisplayed : localStorage.getItem('rankingDisplayed');
			for (let i = 0; i < 3; ++i) {
				this.rankingsAvailable[i] = localStorage.getItem('rankingsAvailable' + i) === null ? this.rankingsAvailable[i] : localStorage.getItem('rankingsAvailable' + i) === 'true';
				this.rankingMonths[i] = localStorage.getItem('rankingMonths' + i) === null ? this.rankingMonths[i] : localStorage.getItem('rankingMonths' + i);
				if (localStorage.getItem('rankings' + i) !== null) {
					if (localStorage.getItem('rankings' + i) === '') {
						this.rankings[i] = '';
					}
					else {
						this.rankings[i] = parseInt(localStorage.getItem('rankings' + i));
					}
				}
			}
			this.layout = localStorage.getItem('layout') === null ? this.layout : parseInt(localStorage.getItem('layout'));
			this.clanNameFont = localStorage.getItem('clanNameFont') === null ? this.clanNameFont : localStorage.getItem('clanNameFont');
			this.clanNameFontSize = localStorage.getItem('clanNameFontSize') === null ? this.clanNameFontSize : parseInt(localStorage.getItem('clanNameFontSize'));
			if (localStorage.getItem('clanNameFontStyles') !== null) {
				this.clanNameFontStyles = [];
				for (let i = 0; i < localStorage.getItem('clanNameFontStyles').split(',').filter(e => e !== '').length; ++i) {
					this.clanNameFontStyles.push(localStorage.getItem('clanNameFontStyles').split(',')[i]);
				}
			}
			this.clanNameOutlineDisplayed = localStorage.getItem('clanNameOutlineDisplayed') === null ? this.clanNameOutlineDisplayed : localStorage.getItem('clanNameOutlineDisplayed');
			this.clanNameStrokeColor = localStorage.getItem('clanNameStrokeColor') === null ? this.clanNameStrokeColor : localStorage.getItem('clanNameStrokeColor');
			this.clanNameOutlineWidth = localStorage.getItem('clanNameOutlineWidth') === null ? this.clanNameOutlineWidth : localStorage.getItem('clanNameOutlineWidth');
			this.clanNameFillColor = localStorage.getItem('clanNameFillColor') === null ? this.clanNameFillColor : localStorage.getItem('clanNameFillColor');
			this.clanNameFillColorTransparency = localStorage.getItem('clanNameFillColorTransparency') === null ? this.clanNameFillColorTransparency : localStorage.getItem('clanNameFillColorTransparency');
			this.labelFont = localStorage.getItem('labelFont') === null ? this.labelFont : localStorage.getItem('labelFont');
			if (localStorage.getItem('labelFontStyles') !== null) {
				this.labelFontStyles = [];
				for (let i = 0; i < localStorage.getItem('labelFontStyles').split(',').filter(e => e !== '').length; ++i) {
					this.labelFontStyles.push(localStorage.getItem('labelFontStyles').split(',')[i]);
				}
			}
			this.labelFontColor = localStorage.getItem('labelFontColor') === null ? this.labelFontColor : localStorage.getItem('labelFontColor');
			this.labelBackgroundDisplayed = localStorage.getItem('labelBackgroundDisplayed') === null ? this.labelBackgroundDisplayed : localStorage.getItem('labelBackgroundDisplayed');
			this.labelBackgroundColor = localStorage.getItem('labelBackgroundColor') === null ? this.labelBackgroundColor : localStorage.getItem('labelBackgroundColor');
			this.inputFont = localStorage.getItem('inputFont') === null ? this.inputFont : localStorage.getItem('inputFont');
			if (localStorage.getItem('inputFontStyles') !== null) {
				this.inputFontStyles = [];
				for (let i = 0; i < localStorage.getItem('inputFontStyles').split(',').filter(e => e !== '').length; ++i) {
					this.inputFontStyles.push(localStorage.getItem('inputFontStyles').split(',')[i]);
				}
			}
			this.inputFontColor = localStorage.getItem('inputFontColor') === null ? this.inputFontColor : localStorage.getItem('inputFontColor');
			this.paneFrameDisplayed = localStorage.getItem('paneFrameDisplayed') === null ? this.paneFrameDisplayed : localStorage.getItem('paneFrameDisplayed');
			this.paneFrameColor = localStorage.getItem('paneFrameColor') === null ? this.paneFrameColor : localStorage.getItem('paneFrameColor');
			this.paneFrameWidth = localStorage.getItem('paneFrameWidth') === null ? this.paneFrameWidth : localStorage.getItem('paneFrameWidth');
			this.paneColor = localStorage.getItem('paneColor') === null ? this.paneColor : localStorage.getItem('paneColor');
			this.paneTransparency = localStorage.getItem('paneTransparency') === null ? this.paneTransparency : localStorage.getItem('paneTransparency');
		},
		mounted: function() {
			document.getElementById('background-image').addEventListener('load', () => {
				this.previewCard();
				// ブラウザの進み戻りを行ったときにプレビュー固定のチェックが入っているのにプレビュー固定されない挙動の対処
				this.previewFixed = document.getElementById('preview-fixing').checked;
				this.changePreviewFixing();
			});
		},
		props: {
			fonts: Array
		},
		data: function() {
			return {
				backgroundImageNames: [
					'hatsunes_present_strategy0', 'hatsunes_present_strategy1', 'hatsunes_present_strategy2', 'little_lyrical_adventure0', 'little_lyrical_adventure1', 'little_lyrical_adventure2',
					'vampire_hunter_with_ilya0', 'dangerous_vacance_beach_gourmet_princess0', 'dangerous_vacance_beach_gourmet_princess1', 'dangerous_vacance_beach_gourmet_princess2',
					'tamaki_and_mihuyu_uninhabited_island_zero_rupi_life0', 'black_iron_nightmare0', 'black_iron_nightmare1', 'black_iron_nightmare2', 'trick_or_pudding_unity_halloween_party0',
					'trick_or_pudding_unity_halloween_party1', 'twilight_breakers0', 'twilight_breakers1', 'carol_oblivion0', 'carol_oblivion1', 'carol_oblivion2', 'carol_oblivion3',
					'new_year_twinkle_crisis0', 'new_year_twinkle_crisis1', 'new_year_twinkle_crisis2', 'battle_of_valentine0', 'battle_of_valentine1', 'battle_of_valentine2', 'royal_capital_detective0',
					'royal_capital_detective1', 'royal_capital_detective2', 'twin_flowers_bloomed_in_asturm0', 'shogun_travelogue0', 'shogun_travelogue1', 'shogun_travelogue2', 'shogun_travelogue3',
					'shogun_travelogue4', 'shogun_travelogue5', 'shogun_travelogue6', 'shogun_travelogue7', 'shogun_travelogue8', 'shogun_travelogue9', 'suzunas_rainbow_stage0',
					'suzunas_rainbow_stage1', 'suzunas_rainbow_stage2', 'summer_mahomaho_kingdom0', 'summer_mahomaho_kingdom1', 'summer_mahomaho_kingdom2', 'summer_mahomaho_kingdom3',
					'forest_coward_and_holy_schools_lyceenne0', 'forest_coward_and_holy_schools_lyceenne1', 'forest_coward_and_holy_schools_lyceenne2', 'little_brave_halloween_night0',
					'little_brave_halloween_night1', 'little_brave_halloween_night2', 'dragons_explorers0', 'dragons_explorers1', 'dragons_explorers2', 'dragons_explorers3', 'present_panic0',
					'present_panic1', 'present_panic2', 'landsol_guild_race0', 'landsol_guild_race1', 'landsol_guild_race2', 'landsol_guild_race3', 'magical_girl0', 'magical_girl1',
					'angel_and_holy_schools_lyceenne0', 'angel_and_holy_schools_lyceenne1', 'angel_and_holy_schools_lyceenne2', 'ranch_four_farmers0', 'ranch_four_farmers1', 'rino_in_wonderland0',
					'rino_in_wonderland1', 'tanabata_story0', 'tanabata_story1', 'tanabata_story2', 'misatos_summer_yell0', 'misatos_summer_yell1', 'misatos_summer_yell2', 'misatos_summer_yell3',
					'misatos_summer_yell4', 'happy_change_angels0', 'happy_change_angels1', 'happy_change_angels2', 'halloween_ghost_festival0', 'halloween_ghost_festival1', 'halloween_ghost_festival2'
				],
				backgroundImagePath: 'img/hatsunes_present_strategy0.webp',
				clanName: 'おひるねくらぶ',
				averageLevel: 175,
				memberCount: 25,
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
				clanNameFont: this.fonts.indexOf('ＭＳ ゴシック') !== -1 ? 'ＭＳ ゴシック' : this.fonts.indexOf('monospace') !== -1 ? 'monospace' : this.fonts[0],
				clanNameFontSize: 100,
				clanNameFontStyles: ['bold'],
				clanNameOutlineDisplayed: 'true',
				clanNameStrokeColor: '#000000',
				clanNameOutlineWidth: '10',
				clanNameFillColor: '#3264FF',
				clanNameFillColorTransparency: '1.0',
				labelFont: this.fonts.indexOf('ＭＳ ゴシック') !== -1 ? 'ＭＳ ゴシック' : this.fonts.indexOf('monospace') !== -1 ? 'monospace' : this.fonts[0],
				labelFontStyles: ['bold'],
				labelFontColor: '#FFFFFF',
				labelBackgroundDisplayed: 'true',
				labelBackgroundColor: '#6464FF',
				inputFont: this.fonts.indexOf('ＭＳ ゴシック') !== -1 ? 'ＭＳ ゴシック' : this.fonts.indexOf('monospace') !== -1 ? 'monospace' : this.fonts[0],
				inputFontStyles: ['bold'],
				inputFontColor: '#000000',
				paneFrameDisplayed: 'true',
				paneFrameColor: '#000000',
				paneFrameWidth: '3',
				paneColor: '#FFFFFF',
				paneTransparency: '0.6',
				previewFixed: false
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
				this.saveParameters();
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
			saveParameters: function() {
				localStorage.setItem('backgroundImagePath', this.backgroundImagePath);
				localStorage.setItem('clanName', this.clanName);
				localStorage.setItem('averageLevel', this.averageLevel);
				localStorage.setItem('memberCount', this.memberCount);
				localStorage.setItem('policy', this.policy);
				localStorage.setItem('condition', this.condition);
				localStorage.setItem('guideline', this.guideline);
				localStorage.setItem('postscriptDisplayed', this.postscriptDisplayed);
				localStorage.setItem('postscript', this.postscript);
				localStorage.setItem('rankingDisplayed', this.rankingDisplayed);
				for (let i = 0; i < 3; ++i) {
					localStorage.setItem('rankingsAvailable' + i, this.rankingsAvailable[i]);
					localStorage.setItem('rankingMonths' + i, this.rankingMonths[i]);
					localStorage.setItem('rankings' + i, this.rankings[i]);
				}
				localStorage.setItem('layout', this.layout);
				localStorage.setItem('clanNameFont', this.clanNameFont);
				localStorage.setItem('clanNameFontSize', this.clanNameFontSize);
				localStorage.setItem('clanNameFontStyles', this.clanNameFontStyles);
				localStorage.setItem('clanNameOutlineDisplayed', this.clanNameOutlineDisplayed);
				localStorage.setItem('clanNameStrokeColor', this.clanNameStrokeColor);
				localStorage.setItem('clanNameOutlineWidth', this.clanNameOutlineWidth);
				localStorage.setItem('clanNameFillColor', this.clanNameFillColor);
				localStorage.setItem('clanNameFillColorTransparency', this.clanNameFillColorTransparency);
				localStorage.setItem('labelFont', this.labelFont);
				localStorage.setItem('labelFontStyles', this.labelFontStyles);
				localStorage.setItem('labelFontColor', this.labelFontColor);
				localStorage.setItem('labelBackgroundDisplayed', this.labelBackgroundDisplayed);
				localStorage.setItem('labelBackgroundColor', this.labelBackgroundColor);
				localStorage.setItem('inputFont', this.inputFont);
				localStorage.setItem('inputFontStyles', this.inputFontStyles);
				localStorage.setItem('inputFontColor', this.inputFontColor);
				localStorage.setItem('paneFrameDisplayed', this.paneFrameDisplayed);
				localStorage.setItem('paneFrameColor', this.paneFrameColor);
				localStorage.setItem('paneFrameWidth', this.paneFrameWidth);
				localStorage.setItem('paneColor', this.paneColor);
				localStorage.setItem('paneTransparency', this.paneTransparency);
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
				this.drawInput(context, xPos + 700 + context.measureText('メンバー数').width + 40, yPos + 15, this.memberCount, 40, 'start');
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
						y_ = y + (row - 1) * 50.0;
						const s = text.substr(splitPosition, i - splitPosition);
						context.fillText(s, x, y_);
						row++;
						splitPosition = i;
					}
					if (i === text.length) {
						y_ = y + (row - 1) * 50.0;
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
				this.backgroundImagePath = 'img/hatsunes_present_strategy0.webp';
				this.clanName = 'おひるねくらぶ';
				this.averageLevel = 175;
				this.memberCount = 25;
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
				this.clanNameFont = this.fonts.indexOf('ＭＳ ゴシック') !== -1 ? 'ＭＳ ゴシック' : this.fonts.indexOf('monospace') !== -1 ? 'monospace' : this.fonts[0];
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
				this.labelFont = this.fonts.indexOf('ＭＳ ゴシック') !== -1 ? 'ＭＳ ゴシック' : this.fonts.indexOf('monospace') !== -1 ? 'monospace' : this.fonts[0];
				this.labelFontStyles = ['bold'];
				this.labelFontColor = '#FFFFFF';
				this.labelBackgroundDisplayed = 'true';
				this.labelBackgroundColor = '#6464FF';
				this.previewCard();
			},
			resetInputSetting: function() {
				this.inputFont = this.fonts.indexOf('ＭＳ ゴシック') !== -1 ? 'ＭＳ ゴシック' : this.fonts.indexOf('monospace') !== -1 ? 'monospace' : this.fonts[0];
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
				a.download = 'クランプロフカード.png';
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
											<input v-bind:id="'image' + i" class="uk-radio" type="radio" v-model="backgroundImagePath" v-bind:value="'img/' + e + '.webp'">
										</div>
										<label class="uk-form-label" v-bind:for="'image' + i"><img v-bind:src="'img/' + e + '.webp'"></label>
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
										<img v-bind:src="'img/layout' + (i - 1) + '.webp'">
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
				<div><button class="uk-button uk-button-default uk-button-small" v-on:click="saveCard()">カードを保存</button><div>
				<div id="spacer" class="uk-margin-top"></div>
				<div id="footer">
					<div>プレビュー<label class="uk-margin-left"><input id="preview-fixing" type="checkbox" class="uk-checkbox" v-model="previewFixed" v-on:change="changePreviewFixing()"> 画面内に常に表示</label></div>
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
		data: function() {
			return {
				fonts: fonts.filter(e => fontDetector.detect(e))
			};
		},
		template: `
			<component v-bind:fonts="fonts"></component>
		`
	});
});
