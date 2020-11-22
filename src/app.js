import UIkit from 'uikit';
import './uikit.min.css';
import Vue from 'vue';
import host from './host';

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

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	components: {
		host: host
	},
	data: function() {
		return {
			fonts: fonts.filter(e => fontDetector.detect(e)),
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
				'lovely_monica1.webp', 'lovely_monica2.webp'
			],
		};
	},
	template: `
		<host v-bind:fonts="fonts" v-bind:backgroundImageNames="backgroundImageNames"></host>
	`
});
