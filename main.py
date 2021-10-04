import requests, re
from bs4 import BeautifulSoup, NavigableString, Tag

#for(let item in list) {
#    if(list[item].children?.[0]?.children?.[0]?.href) arr.push(list[item].children[0].children[0].href)
#}

#let list = document.getElementsByClassName("wikitable sortable mw-collapsible mw-made-collapsible jquery-tablesorter")[0]["tBodies"][0].children

links = [
  "https://wynncraft.fandom.com/wiki/Enzan%27s_Brother","https://wynncraft.fandom.com/wiki/King%27s_Recruit","https://wynncraft.fandom.com/wiki/Poisoning_the_Pest","https://wynncraft.fandom.com/wiki/Cook_Assistant","https://wynncraft.fandom.com/wiki/Infested_Plants","https://wynncraft.fandom.com/wiki/The_Sewers_of_Ragni","https://wynncraft.fandom.com/wiki/Tunnel_Trouble","https://wynncraft.fandom.com/wiki/Underwater","https://wynncraft.fandom.com/wiki/Mushroom_Man","https://wynncraft.fandom.com/wiki/Elemental_Exercise","https://wynncraft.fandom.com/wiki/Potion_Making","https://wynncraft.fandom.com/wiki/Stable_Story","https://wynncraft.fandom.com/wiki/Arachnids%27_Ascent","https://wynncraft.fandom.com/wiki/Creeper_Infiltration","https://wynncraft.fandom.com/wiki/Maltic%27s_Well","https://wynncraft.fandom.com/wiki/Lava_Springs","https://wynncraft.fandom.com/wiki/Grave_Digger","https://wynncraft.fandom.com/wiki/Studying_the_Corrupt","https://wynncraft.fandom.com/wiki/Macabre_Masquerade_%27%27Hallowynn_2014%27%27","https://wynncraft.fandom.com/wiki/Pit_of_the_Dead_(Quest)","https://wynncraft.fandom.com/wiki/Cluck_Cluck","https://wynncraft.fandom.com/wiki/The_Dark_Descent","https://wynncraft.fandom.com/wiki/Dwelling_Walls","https://wynncraft.fandom.com/wiki/Recover_the_Past","https://wynncraft.fandom.com/wiki/Tempo_Town_Trouble","https://wynncraft.fandom.com/wiki/The_Corrupted_Village","https://wynncraft.fandom.com/wiki/Lost_Tower","https://wynncraft.fandom.com/wiki/Deja_Vu","https://wynncraft.fandom.com/wiki/Misadventure_on_the_Sea","https://wynncraft.fandom.com/wiki/Craftmas_Chaos","https://wynncraft.fandom.com/wiki/The_Mercenary","https://wynncraft.fandom.com/wiki/Green_Gloop","https://wynncraft.fandom.com/wiki/A_Sandy_Scandal","https://wynncraft.fandom.com/wiki/Kingdom_of_Sand","https://wynncraft.fandom.com/wiki/Meaningful_Holiday","https://wynncraft.fandom.com/wiki/WynnExcavation_Site_A","https://wynncraft.fandom.com/wiki/Tribal_Aggression","https://wynncraft.fandom.com/wiki/Wrath_of_the_Mummy","https://wynncraft.fandom.com/wiki/Canyon_Condor","https://wynncraft.fandom.com/wiki/Pirate%27s_Trove","https://wynncraft.fandom.com/wiki/Tower_of_Ascension_(Quest)","https://wynncraft.fandom.com/wiki/Ice_Nations","https://wynncraft.fandom.com/wiki/Heart_of_Llevigar","https://wynncraft.fandom.com/wiki/Clearing_the_Camps","https://wynncraft.fandom.com/wiki/Star_Thief","https://wynncraft.fandom.com/wiki/Fate_of_the_Fallen","https://wynncraft.fandom.com/wiki/Underice","https://wynncraft.fandom.com/wiki/Blazing_Retribution","https://wynncraft.fandom.com/wiki/Bob%27s_Lost_Soul","https://wynncraft.fandom.com/wiki/WynnExcavation_Site_B","https://wynncraft.fandom.com/wiki/Frost_Bite","https://wynncraft.fandom.com/wiki/An_Iron_Heart_Part_I","https://wynncraft.fandom.com/wiki/Rise_of_the_Quartron","https://wynncraft.fandom.com/wiki/The_House_of_Twain_(Quest)","https://wynncraft.fandom.com/wiki/A_Grave_Mistake","https://wynncraft.fandom.com/wiki/The_Maiden_Tower","https://wynncraft.fandom.com/wiki/Corrupted_Betrayal","https://wynncraft.fandom.com/wiki/Crop_Failure","https://wynncraft.fandom.com/wiki/Jungle_Fever","https://wynncraft.fandom.com/wiki/Master_Piece_(1.19)","https://wynncraft.fandom.com/wiki/Death_Whistle","https://wynncraft.fandom.com/wiki/Master_Piece","https://wynncraft.fandom.com/wiki/Realm_of_Light_I_-_The_Worm_Holes","https://wynncraft.fandom.com/wiki/The_Shadow_of_the_Beast","https://wynncraft.fandom.com/wiki/Zhight_Island_(Quest)","https://wynncraft.fandom.com/wiki/WynnExcavation_Site_C","https://wynncraft.fandom.com/wiki/The_Passage_(Quest)","https://wynncraft.fandom.com/wiki/An_Iron_Heart_Part_II","https://wynncraft.fandom.com/wiki/The_Order_of_the_Grook","https://wynncraft.fandom.com/wiki/Beneath_the_Depths","https://wynncraft.fandom.com/wiki/Redbeard%27s_Booty","https://wynncraft.fandom.com/wiki/Reclaiming_the_House","https://wynncraft.fandom.com/wiki/Realm_of_Light_II_-_Taproot","https://wynncraft.fandom.com/wiki/Lost_in_the_Jungle","https://wynncraft.fandom.com/wiki/Out_of_my_Mind","https://wynncraft.fandom.com/wiki/Realm_of_Light_III_-_A_Headless_History","https://wynncraft.fandom.com/wiki/Lost_Royalty","https://wynncraft.fandom.com/wiki/Lost_Soles","https://wynncraft.fandom.com/wiki/Memory_Paranoia","https://wynncraft.fandom.com/wiki/From_the_Mountains","https://wynncraft.fandom.com/wiki/Temple_of_the_Legends_(Quest)","https://wynncraft.fandom.com/wiki/Grand_Youth","https://wynncraft.fandom.com/wiki/Lazarus_Pit","https://wynncraft.fandom.com/wiki/Haven_Antiquity","https://wynncraft.fandom.com/wiki/Shattered_Minds","https://wynncraft.fandom.com/wiki/WynnExcavation_Site_D","https://wynncraft.fandom.com/wiki/Realm_of_Light_IV_-_Finding_the_Light","https://wynncraft.fandom.com/wiki/Lexdale_Witch_Trials","https://wynncraft.fandom.com/wiki/Forbidden_Prison_(Quest)","https://wynncraft.fandom.com/wiki/Murder_Mystery","https://wynncraft.fandom.com/wiki/Troubled_Tribesmen","https://wynncraft.fandom.com/wiki/Reincarnation","https://wynncraft.fandom.com/wiki/Acquiring_Credentials","https://wynncraft.fandom.com/wiki/Aldorei%27s_Secret_Part_I","https://wynncraft.fandom.com/wiki/Flight_in_Distress","https://wynncraft.fandom.com/wiki/The_Ultimate_Weapon","https://wynncraft.fandom.com/wiki/Aldorei%27s_Secret_Part_II","https://wynncraft.fandom.com/wiki/The_Bigger_Picture","https://wynncraft.fandom.com/wiki/Purple_and_Blue","https://wynncraft.fandom.com/wiki/The_Hunger_of_Gerts_Part_1","https://wynncraft.fandom.com/wiki/The_Hunger_of_Gerts_Part_2","https://wynncraft.fandom.com/wiki/Realm_of_Light_V_-_The_Realm_of_Light","https://wynncraft.fandom.com/wiki/Fallen_Delivery","https://wynncraft.fandom.com/wiki/General%27s_Orders","https://wynncraft.fandom.com/wiki/The_Qira_Hive_(Quest)","https://wynncraft.fandom.com/wiki/%3F%3F%3F","https://wynncraft.fandom.com/wiki/From_the_Bottom","https://wynncraft.fandom.com/wiki/The_Thanos_Vaults","https://wynncraft.fandom.com/wiki/The_Belly_of_the_Beast","https://wynncraft.fandom.com/wiki/A_Marauder%27s_Dues","https://wynncraft.fandom.com/wiki/The_Envoy_Part_I","https://wynncraft.fandom.com/wiki/The_Canyon_Guides","https://wynncraft.fandom.com/wiki/The_Canary_Calls","https://wynncraft.fandom.com/wiki/The_Lost","https://wynncraft.fandom.com/wiki/Cowfusion","https://wynncraft.fandom.com/wiki/Desperate_Metal","https://wynncraft.fandom.com/wiki/Mixed_Feelings","https://wynncraft.fandom.com/wiki/Beyond_the_Grave","https://wynncraft.fandom.com/wiki/The_Hidden_City","https://wynncraft.fandom.com/wiki/Enter_the_Dojo","https://wynncraft.fandom.com/wiki/The_Envoy_Part_II","https://wynncraft.fandom.com/wiki/Fantastic_Voyage","https://wynncraft.fandom.com/wiki/Dwarves_and_Doguns_Part_I","https://wynncraft.fandom.com/wiki/The_Feathers_Fly_Part_I","https://wynncraft.fandom.com/wiki/Dwarves_and_Doguns_Part_II","https://wynncraft.fandom.com/wiki/Dwarves_and_Doguns_Part_III","https://wynncraft.fandom.com/wiki/The_Feathers_Fly_Part_II","https://wynncraft.fandom.com/wiki/Dwarves_and_Doguns_Part_IV","https://wynncraft.fandom.com/wiki/One_Thousand_Meters_Under","https://wynncraft.fandom.com/wiki/Recipe_For_Disaster","https://wynncraft.fandom.com/wiki/The_Fortuneteller","https://wynncraft.fandom.com/wiki/Royal_Trials","https://wynncraft.fandom.com/wiki/The_Hero_of_Gavel","https://wynncraft.fandom.com/wiki/A_Journey_Beyond","https://wynncraft.fandom.com/wiki/The_Olmic_Rune","https://wynncraft.fandom.com/wiki/A_Journey_Further","https://wynncraft.fandom.com/wiki/Point_of_No_Return","https://wynncraft.fandom.com/wiki/A_Hunter%27s_Calling"
]

# links = [
#   "https://wynncraft.fandom.com/wiki/Enzan%27s_Brother","https://wynncraft.fandom.com/wiki/King%27s_Recruit","https://wynncraft.fandom.com/wiki/Poisoning_the_Pest"
# ]

class Rewards:
  def __init__(self, links):
    self.links = links
    self.found = False
    self.rewards = []
    self.quests = {}

  def get_page(self, link):
    res = requests.get(link)
    self.parsed_page = BeautifulSoup(res.text, "html.parser")

  def get_quest_name(self):
    self.quest = self.parsed_page.find_all("h1", class_="page-header__title")[0].text.strip()
    print(f"Currrent quest: {self.quest}")

  def get_rewards_table(self):
    self.table = self.parsed_page.find_all("table", class_="infobox")[0]

  def get_rows(self):
    self.rows = self.table.find_all('tr')

  def get_quest_rewards(self):
    for row in self.rows:
      cells = row.find_all('td')
      for cell in cells:
        for child in cell.children:
          if self.found is True:
            for node in child:
              if isinstance(node, Tag):
                temp_rewards = list(filter(None, re.split('(\d+)\s(.+)', node.text.strip())))
                if len(temp_rewards) == 1:
                  self.rewards.append({
                    "quantity": 1,
                    "item": temp_rewards[0]
                  })
                else:
                  self.rewards.append({
                    "quantity": temp_rewards[0],
                    "item": temp_rewards[1]
                  })
            self.found = False
          if "As follows:" in child:
            self.found = True

  def start(self):
    for link in self.links:
      # Get the wiki page and parse it
      self.get_page(link)

      # Search the wiki page for the title of the quest
      self.get_quest_name()

      # Search the wiki page for the HTML Table containing the rewards for the quest
      self.get_rewards_table()

      # Parse the rewards table and get all the rows
      self.get_rows()

      # Iterate through the rewards table rows and extract all the rewards
      self.get_quest_rewards()

      # Add the quest its rewards to the dictionary
      self.quests[self.quest] = self.rewards

      # Reset the initial values
      self.found = False
      self.rewards = []
    
    # Return the final result
    return self.quests

rewards = Rewards(links)

quests = rewards.start()

print(quests)