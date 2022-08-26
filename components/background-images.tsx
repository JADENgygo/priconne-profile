import { Form, Accordion } from "react-bootstrap";
import React from "react";
import Image from "next/image";

type Props = {
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  state: {
    backgroundImageName: string;
  };
};

export const BackgroundImages = (props: Props) => {
  return (
    <div className={props.className}>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>背景画像</Accordion.Header>
          <Accordion.Body>
            <Form>
              {/* Form.LabelにhtmlForを指定しているのでForm.GroupのcontrolIdの指定は不要 */}
              <Form.Group>
                <div className="row gy-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 text-center">
                  {backgroundImageNames.map((value) => (
                    <div className="col" key={value}>
                      <Form.Label htmlFor={value}>
                        <Form.Check
                          type="radio"
                          name="backgroundImageName"
                          id={value}
                          value={value}
                          onChange={props.onChange}
                          checked={props.state.backgroundImageName === value}
                        />
                        <Image
                          src={"/img/thumbnails/" + value}
                          width={240}
                          height={135}
                          alt={value}
                        />
                      </Form.Label>
                    </div>
                  ))}
                </div>
              </Form.Group>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export const backgroundImageNames = [
  "hatsunes_present_strategy0.webp",
  "hatsunes_present_strategy1.webp",
  "hatsunes_present_strategy2.webp",
  "little_lyrical_adventure0.webp",
  "little_lyrical_adventure1.webp",
  "little_lyrical_adventure2.webp",
  "vampire_hunter_with_ilya0.webp",
  "dangerous_vacance_beach_gourmet_princess0.webp",
  "dangerous_vacance_beach_gourmet_princess1.webp",
  "dangerous_vacance_beach_gourmet_princess2.webp",
  "tamaki_and_mihuyu_uninhabited_island_zero_rupi_life0.webp",
  "black_iron_nightmare0.webp",
  "black_iron_nightmare1.webp",
  "black_iron_nightmare2.webp",
  "trick_or_pudding_unity_halloween_party0.webp",
  "trick_or_pudding_unity_halloween_party1.webp",
  "twilight_breakers0.webp",
  "twilight_breakers1.webp",
  "carol_oblivion0.webp",
  "carol_oblivion1.webp",
  "carol_oblivion2.webp",
  "carol_oblivion3.webp",
  "new_year_twinkle_crisis0.webp",
  "new_year_twinkle_crisis1.webp",
  "new_year_twinkle_crisis2.webp",
  "battle_of_valentine0.webp",
  "battle_of_valentine1.webp",
  "battle_of_valentine2.webp",
  "royal_capital_detective0.webp",
  "royal_capital_detective1.webp",
  "royal_capital_detective2.webp",
  "twin_flowers_bloomed_in_asturm0.webp",
  "shogun_travelogue0.webp",
  "shogun_travelogue1.webp",
  "shogun_travelogue2.webp",
  "shogun_travelogue3.webp",
  "shogun_travelogue4.webp",
  "shogun_travelogue5.webp",
  "shogun_travelogue6.webp",
  "shogun_travelogue7.webp",
  "shogun_travelogue8.webp",
  "shogun_travelogue9.webp",
  "suzunas_rainbow_stage0.webp",
  "suzunas_rainbow_stage1.webp",
  "suzunas_rainbow_stage2.webp",
  "summer_mahomaho_kingdom0.webp",
  "summer_mahomaho_kingdom1.webp",
  "summer_mahomaho_kingdom2.webp",
  "summer_mahomaho_kingdom3.webp",
  "forest_coward_and_holy_schools_lyceenne0.webp",
  "forest_coward_and_holy_schools_lyceenne1.webp",
  "forest_coward_and_holy_schools_lyceenne2.webp",
  "little_brave_halloween_night0.webp",
  "little_brave_halloween_night1.webp",
  "little_brave_halloween_night2.webp",
  "dragons_explorers0.webp",
  "dragons_explorers1.webp",
  "dragons_explorers2.webp",
  "dragons_explorers3.webp",
  "present_panic0.webp",
  "present_panic1.webp",
  "present_panic2.webp",
  "landsol_guild_race0.webp",
  "landsol_guild_race1.webp",
  "landsol_guild_race2.webp",
  "landsol_guild_race3.webp",
  "magical_girl0.webp",
  "magical_girl1.webp",
  "angel_and_holy_schools_lyceenne0.webp",
  "angel_and_holy_schools_lyceenne1.webp",
  "angel_and_holy_schools_lyceenne2.webp",
  "ranch_four_farmers0.webp",
  "ranch_four_farmers1.webp",
  "rino_in_wonderland0.webp",
  "rino_in_wonderland1.webp",
  "tanabata_story0.webp",
  "tanabata_story1.webp",
  "tanabata_story2.webp",
  "misatos_summer_yell0.webp",
  "misatos_summer_yell1.webp",
  "misatos_summer_yell2.webp",
  "misatos_summer_yell3.webp",
  "misatos_summer_yell4.webp",
  "happy_change_angels0.webp",
  "happy_change_angels1.webp",
  "happy_change_angels2.webp",
  "halloween_ghost_festival0.webp",
  "halloween_ghost_festival1.webp",
  "halloween_ghost_festival2.webp",
  "lovely_monica0.webp",
  "lovely_monica1.webp",
  "lovely_monica2.webp",
  "debutante_shangri_la0.webp",
  "debutante_shangri_la1.webp",
  "debutante_shangri_la2.webp",
  "gourmet_princess0.webp",
  "gourmet_princess1.webp",
  "gourmet_princess2.webp",
  "connect_bond0.webp",
  "connect_bond1.webp",
  "connect_bond2.webp",
  "cinderella_lesson0.webp",
  "cinderella_lesson1.webp",
  "cinderella_lesson2.webp",
  "cinderella_lesson3.webp",
  "saint_of_steel0.webp",
  "saint_of_steel1.webp",
  "saint_of_steel2.webp",
  "inori_sos0.webp",
  "inori_sos1.webp",
  "inori_sos2.webp",
  "inori_sos3.webp",
  "aoi_toy_friends0.webp",
  "aoi_toy_friends1.webp",
  "aoi_toy_friends2.webp",
  "endless_summer_produce0.webp",
  "endless_summer_produce1.webp",
  "endless_summer_produce2.webp",
  "just_a_moment0.webp",
  "just_a_moment1.webp",
  "just_a_moment2.webp",
  "just_a_moment3.webp",
  "illegal_oedo_karte0.webp",
  "illegal_oedo_karte1.webp",
  "illegal_oedo_karte2.webp",
  "illegal_oedo_karte3.webp",
  "halloween_savers_scramble0.webp",
  "halloween_savers_scramble1.webp",
  "halloween_savers_scramble2.webp",
  "magical_noirs0.webp",
  "magical_noirs1.webp",
  "magical_noirs2.webp",
  "magical_noirs3.webp",
  "magical_noirs4.webp",
  "magical_noirs5.webp",
  "merry_pudding_christmas0.webp",
  "merry_pudding_christmas1.webp",
  "merry_pudding_christmas2.webp",
  "merry_pudding_christmas3.webp",
  "memories0.webp",
  "memories1.webp",
  "memories2.webp",
  "memories3.webp",
  "remember0.webp",
  "remember1.webp",
  "remember2.webp",
  "remember3.webp",
  "sweet_tiny_stage0.webp",
  "sweet_tiny_stage1.webp",
  "sweet_tiny_stage2.webp",
  "invisible_stealers0.webp",
  "invisible_stealers1.webp",
  "invisible_stealers2.webp",
  "episode_of_pirates0.webp",
  "episode_of_pirates1.webp",
  "episode_of_pirates2.webp",
  "episode_of_pirates3.webp",
  "girls_camp0.webp",
  "girls_camp1.webp",
  "girls_camp2.webp",
  "girls_camp3.webp",
  "twinkle_summer_game0.webp",
  "twinkle_summer_game1.webp",
  "twinkle_summer_game2.webp",
  "little_summer_memories0.webp",
  "little_summer_memories1.webp",
  "little_summer_memories2.webp",
  "little_summer_memories3.webp",
];
