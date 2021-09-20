import UIkit from 'uikit';
import './uikit.min.css';
import Vue from 'vue';
import Host from './Host';

class FontDetector {
	baseFonts: string[];
	testStrings: string[];
	defaultWidths: {[key: string]: number}[];
	defaultHeights: {[key: string]: number}[];

	constructor(testAlphabet: string, testJapanese: string) {
		this.baseFonts = ['monospace', 'sans-serif', 'serif'];
		this.testStrings = [testAlphabet, testJapanese];
		this.defaultWidths = [{}, {}];
		this.defaultHeights = [{}, {}];
		const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
		const span: HTMLSpanElement = document.createElement("span");
		span.style.visibility = 'hidden';
		span.style.fontSize = '72px';
		for (let i: number = 0; i < 2; ++i) {
			span.textContent = this.testStrings[i];
			for (let e of this.baseFonts) {
				span.style.fontFamily = e;
				body.appendChild(span);
				this.defaultWidths[i][e] = span.offsetWidth;
				this.defaultHeights[i][e] = span.offsetHeight;
				body.removeChild(span);
			}
		}
	}

	detect(font: string): boolean {
		let detected: boolean = false;
		const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
		const span: HTMLSpanElement = document.createElement("span");
		span.style.visibility = 'hidden';
		span.style.fontSize = '72px';
		outerFor:
		for (let i: number = 0; i < 2; ++i) {
			span.textContent = this.testStrings[i];
			for (let e of this.baseFonts) {
				span.style.fontFamily = font + ',' + e;
				body.appendChild(span);
				detected = (span.offsetWidth != this.defaultWidths[i][e]) || (span.offsetHeight != this.defaultHeights[i][e]);
				body.removeChild(span);
				if (detected) {
					break outerFor;
				}
			}
		}
		return detected;
	}
}

const fontDetector: FontDetector = new FontDetector('mmmmmmmmmmlli12-', 'あぱプ字１－＾｜＿！＜％＄ｚＡ');
const fonts: string[] = [
	"AR BERKLEY", "AR BLANCA", "AR BONNIE", "AR CARTER", "AR CENA", "AR CHRISTY", "AR DARLING", "AR DECODE", "AR DELANEY", "AR DESTINE", "AR ESSENCE", "AR HERMANN", "AR JULIAN", "Apple Braille Outline 6 Dot",
	"Apple Braille Outline 8 Dot", "Apple Braille Pinpoint 6 Dot", "Apple Braille Pinpoint 8 Dot", "Apple Braille", "Apple Color Emoji", "Apple Symbols", "AppleSDGothicNeo", "AquaKana", "ArabicUIDisplay", "ArabicUIText",
	"Arial Black", "Arial Unicod", "Arial", "ArialHB", "Arimo", "Avenir Next Condensed", "Avenir Next", "Avenir", "BIZ UDPゴシック", "BIZ UDP明朝 Medium", "BIZ UDゴシック", "BIZ UD明朝 Medium", "Bahnschrift Condensed",
	"Bahnschrift Light Condensed", "Bahnschrift Light SemiCondensed", "Bahnschrift Light", "Bahnschrift SemiBold Condensed", "Bahnschrift SemiBold SemiConden", "Bahnschrift SemiBold", "Bahnschrift SemiCondensed",
	"Bahnschrift SemiLight Condensed", "Bahnschrift SemiLight SemiConde", "Bahnschrift SemiLight", "Bahnschrift", "Calibri Light", "Calibri", "Cambria Math", "Cambria", "Candara Light", "Candara", "Comic Sans MS", "Consolas",
	"Constantia", "Corbel Light", "Corbel", "Courier New", "Courier", "DejaVu Sans Condensed", "DejaVu Sans Light", "DejaVu Sans Mono", "DejaVu Sans", "DejaVu Serif Condensed", "DejaVu Serif", "Ebrima", "Franklin Gothic Medium",
	"Gabriola", "Gadugi", "GeezaPro", "Geneva", "Gentium Basic", "Gentium Book Basic", "Georgia", "HelveLTMM", "Helvetica", "HelveticaNeue", "Hiragino Sans GB", "HoloLens MDL2 Assets", "Impact", "Ink Free", "Javanese Text",
	"Keyboard", "Kohinoor", "KohinoorBangla", "KohinoorGujarati", "KohinoorTelugu", "LastResort", "Leelawadee UI Semilight", "Leelawadee UI", "Lucida Bright", "Lucida Console", "Lucida Sans Typewriter", "Lucida Sans Unicode",
	"Lucida Sans", "LucidaGrande", "MS UI Gothic", "MV Boli", "Malgun Gothic Semilight", "Malgun Gothic", "MarkerFelt", "Marlett", "Meiryo UI", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei Light",
	"Microsoft JhengHei UI Light", "Microsoft JhengHei UI", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft YaHei Light", "Microsoft YaHei UI Light",
	"Microsoft YaHei UI", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU-ExtB", "MingLiU_HKSCS-ExtB", "Monaco", "Mongolian Baiti", "MuktaMahee", "Myanmar Text", "NSimSun", "NewYork", "NewYorkItalic", "Nirmala UI Semilight",
	"Nirmala UI", "Noteworthy", "Noto Sans CJK JP Medium", "NotoNastaliq", "NotoSansArmenian", "NotoSansKannada", "NotoSansMyanmar", "NotoSansOriya", "NotoSerifMyanmar", "OpenSymbol", "Optima", "PMingLiU-ExtB", "Palatino Linotype",
	"Palatino", "PingFang", "SFCompact", "SFCompactItalic", "SFCompactRounded", "SFNS", "SFNSItalic", "SFNSMono", "SFNSMonoItalic", "SFNSRounded", "STHeiti Light", "STHeiti Medium", "Segoe MDL2 Assets", "Segoe Print",
	"Segoe Script", "Segoe UI Black", "Segoe UI Emoji", "Segoe UI Historic", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Semilight", "Segoe UI Symbol", "Segoe UI", "SimSun", "SimSun-ExtB", "Sitka Banner", "Sitka Display",
	"Sitka Heading", "Sitka Small", "Sitka Subheading", "Sitka Text", "Supplemental", "Sylfaen", "Symbol", "Tahoma", "Tera Special", "Thonburi", "Times New Roman", "Times", "TimesLTMM", "Trebuchet MS", "UD デジタル 教科書体 N-B",
	"UD デジタル 教科書体 N-R", "UD デジタル 教科書体 NK-B", "UD デジタル 教科書体 NK-R", "UD デジタル 教科書体 NP-B", "UD デジタル 教科書体 NP-R", "Verdana", "Webdings", "Wingdings", "Yu Gothic UI Light", "Yu Gothic UI Semibold",
	"Yu Gothic UI Semilight", "Yu Gothic UI", "ZapfDingbats", "ＭＳ Ｐゴシック", "ＭＳ Ｐ明朝", "ＭＳ ゴシック", "ＭＳ 明朝", "ヒラギノ角ゴシック W0", "ヒラギノ角ゴシック W1", "ヒラギノ角ゴシック W2", "ヒラギノ角ゴシック W3",
	"ヒラギノ角ゴシック W4", "ヒラギノ角ゴシック W5", "ヒラギノ角ゴシック W6", "ヒラギノ角ゴシック W7", "ヒラギノ角ゴシック W8", "ヒラギノ角ゴシック W9", "ヒラギノ丸ゴ ProN W5", "ヒラギノ明朝 ProN", "メイリオ", "游ゴシック Light",
	"游ゴシック Medium", "游ゴシック", "游明朝 Demibold", "游明朝 Light", "游明朝", 'monospace', 'sans-serif', 'serif'
];

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	components: {
		Host
	},
	data: function() {
		return {
			fonts: fonts.filter((e: string) => fontDetector.detect(e)),
			backgroundImageNames: [
				'hatsunes_present_strategy0.webp', 'hatsunes_present_strategy1.webp', 'hatsunes_present_strategy2.webp', 'little_lyrical_adventure0.webp', 'little_lyrical_adventure1.webp', 'little_lyrical_adventure2.webp',
				'vampire_hunter_with_ilya0.webp', 'dangerous_vacance_beach_gourmet_princess0.webp', 'dangerous_vacance_beach_gourmet_princess1.webp', 'dangerous_vacance_beach_gourmet_princess2.webp',
				'tamaki_and_mihuyu_uninhabited_island_zero_rupi_life0.webp', 'black_iron_nightmare0.webp', 'black_iron_nightmare1.webp', 'black_iron_nightmare2.webp', 'trick_or_pudding_unity_halloween_party0.webp',
				'trick_or_pudding_unity_halloween_party1.webp', 'twilight_breakers0.webp', 'twilight_breakers1.webp', 'carol_oblivion0.webp', 'carol_oblivion1.webp', 'carol_oblivion2.webp', 'carol_oblivion3.webp',
				'new_year_twinkle_crisis0.webp', 'new_year_twinkle_crisis1.webp', 'new_year_twinkle_crisis2.webp', 'battle_of_valentine0.webp', 'battle_of_valentine1.webp', 'battle_of_valentine2.webp', 'royal_capital_detective0.webp',
				'royal_capital_detective1.webp', 'royal_capital_detective2.webp', 'twin_flowers_bloomed_in_asturm0.webp', 'shogun_travelogue0.webp', 'shogun_travelogue1.webp', 'shogun_travelogue2.webp', 'shogun_travelogue3.webp',
				'shogun_travelogue4.webp', 'shogun_travelogue5.webp', 'shogun_travelogue6.webp', 'shogun_travelogue7.webp', 'shogun_travelogue8.webp', 'shogun_travelogue9.webp', 'suzunas_rainbow_stage0.webp',
				'suzunas_rainbow_stage1.webp', 'suzunas_rainbow_stage2.webp', 'summer_mahomaho_kingdom0.webp', 'summer_mahomaho_kingdom1.webp', 'summer_mahomaho_kingdom2.webp', 'summer_mahomaho_kingdom3.webp',
				'forest_coward_and_holy_schools_lyceenne0.webp', 'forest_coward_and_holy_schools_lyceenne1.webp', 'forest_coward_and_holy_schools_lyceenne2.webp', 'little_brave_halloween_night0.webp',
				'little_brave_halloween_night1.webp', 'little_brave_halloween_night2.webp', 'dragons_explorers0.webp', 'dragons_explorers1.webp', 'dragons_explorers2.webp', 'dragons_explorers3.webp', 'present_panic0.webp',
				'present_panic1.webp', 'present_panic2.webp', 'landsol_guild_race0.webp', 'landsol_guild_race1.webp', 'landsol_guild_race2.webp', 'landsol_guild_race3.webp', 'magical_girl0.webp', 'magical_girl1.webp',
				'angel_and_holy_schools_lyceenne0.webp', 'angel_and_holy_schools_lyceenne1.webp', 'angel_and_holy_schools_lyceenne2.webp', 'ranch_four_farmers0.webp', 'ranch_four_farmers1.webp', 'rino_in_wonderland0.webp',
				'rino_in_wonderland1.webp', 'tanabata_story0.webp', 'tanabata_story1.webp', 'tanabata_story2.webp', 'misatos_summer_yell0.webp', 'misatos_summer_yell1.webp', 'misatos_summer_yell2.webp', 'misatos_summer_yell3.webp',
				'misatos_summer_yell4.webp', 'happy_change_angels0.webp', 'happy_change_angels1.webp', 'happy_change_angels2.webp', 'halloween_ghost_festival0.webp', 'halloween_ghost_festival1.webp', 'halloween_ghost_festival2.webp', 'lovely_monica0.webp',
				'lovely_monica1.webp', 'lovely_monica2.webp', 'debutante_shangri_la0.webp', 'debutante_shangri_la1.webp', 'debutante_shangri_la2.webp', 'gourmet_princess0.webp', 'gourmet_princess1.webp', 'gourmet_princess2.webp',
				'connect_bond0.webp', 'connect_bond1.webp', 'connect_bond2.webp', 'cinderella_lesson0.webp', 'cinderella_lesson1.webp', 'cinderella_lesson2.webp', 'cinderella_lesson3.webp', 'saint_of_steel0.webp',
				'saint_of_steel1.webp', 'saint_of_steel2.webp', 'inori_sos0.webp', 'inori_sos1.webp', 'inori_sos2.webp', 'inori_sos3.webp', 'aoi_toy_friends0.webp', 'aoi_toy_friends1.webp', 'aoi_toy_friends2.webp',
				'endless_summer_produce0.webp', 'endless_summer_produce1.webp', 'endless_summer_produce2.webp', 'just_a_moment0.webp', 'just_a_moment1.webp', 'just_a_moment2.webp', 'just_a_moment3.webp',
				'illegal_oedo_karte0.webp', 'illegal_oedo_karte1.webp', 'illegal_oedo_karte2.webp', 'illegal_oedo_karte3.webp'
			],
		};
	},
	template: `
		<Host v-bind:fonts="fonts" v-bind:backgroundImageNames="backgroundImageNames"/>
	`
});
