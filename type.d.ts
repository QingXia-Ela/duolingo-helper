// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);

export interface DuolingoReduxState {
  achievementsV3: AchievementsV3;
  brb: { [key: string]: Brb };
  browserSettings: BrowserSettings;
  characters: Characters;
  config: Config;
  courseHistories: CourseHistories;
  courses: Courses;
  friends: Friends;
  goals: Goals;
  items: Items;
  notifications: { [key: string]: NotificationValue };
  paymentMethods: any[];
  sessionCache: SessionCache;
  skills: { [key: string]: Skill };
  student: Student;
  subscriptions: CharacterStateClass;
  uiPersisted: UIPersisted;
  user: WelcomeUser;
  heartsState: HeartsState;
  animations: any[];
  avatars: Avatars;
  debug: Debug;
  player: Player;
  profile: Profile;
  sessionEnd: SessionEnd;
  stories: Stories;
  ui: UI;
}

export interface AchievementsV3 {
  achievements: Achievement[];
  sessionStartAchievements: Achievement[];
}

export interface Achievement {
  count: number;
  name: string;
  noProgressBar: boolean;
  rewards: CharacterStateClass;
  shouldShowUnlock: boolean;
  tier: number;
  tierCounts: number[];
}

export interface CharacterStateClass {
}

export interface Avatars {
  builderConfig: BuilderConfig;
  canShowAvatarsIntro: boolean;
  builtAvatar: BuiltAvatar;
}

export interface BuilderConfig {
  avatarOnProfileDisplayOptions: { [key: string]: AvatarOnProfileDisplayOption };
  defaultBuiltAvatarState: { [key: string]: number };
  riveFileUrl: string;
  riveFileVersion: string;
  stateChooserTabs: StateChooserTab[];
}

export interface AvatarOnProfileDisplayOption {
  backgroundColor: string;
  learningAppIconColor: LearningAppIconColor;
  systemIconDisplayOption: SystemIconDisplayOption;
}

export enum LearningAppIconColor {
  Fffffd = "#FFFFFD",
  The4B4B4B = "#4B4B4B",
}

export enum SystemIconDisplayOption {
  Dark = "DARK",
  Light = "LIGHT",
}

export interface StateChooserTab {
  sections: StateChooserTabSection[];
  selectedIcon: SelectedIcon;
  tabName: string;
  unselectedIcon: SelectedIcon;
}

export interface StateChooserTabSection {
  buttonType: ButtonType;
  featureButtons: FeatureButton[];
  header: string;
  imageButtons: ImageButton[];
  layoutType: LayoutType;
}

export enum ButtonType {
  Feature = "FEATURE",
  Image = "IMAGE",
}

export interface FeatureButton {
  state: FeatureButtonState;
  statesToOverride: { [key: string]: number };
  value: number;
}

export enum FeatureButtonState {
  Body = "Body",
  Expression = "Expression",
  FacialHair = "FacialHair",
  Glasses = "Glasses",
  Headwear = "Headwear",
  MainHair = "MainHair",
  NosePiercing = "Nose Piercing",
  Piercings = "Piercings",
  Wrinkles = "Wrinkles",
}

export interface ImageButton {
  color: string;
  state: ImageButtonState;
  value: number;
}

export enum ImageButtonState {
  BackgroundColor = "BackgroundColor",
  ClothingColor = "ClothingColor",
  EyeColor = "EyeColor",
  FacialHairColor = "FacialHairColor",
  GlassesColor = "GlassesColor",
  HeadwearColor = "HeadwearColor",
  MainHairColor = "MainHairColor",
  SkinTone = "SkinTone",
}

export enum LayoutType {
  Grid = "GRID",
  Linear = "LINEAR",
}

export interface SelectedIcon {
  darkUrl: string;
  lightUrl: string;
}

export interface BuiltAvatar {
  inLessonExpressions: InLessonExpressions;
  isSavedState: boolean;
  profileTabIcon: ProfileTabIcon;
  state: { [key: string]: number };
  stateId: string;
}

export interface InLessonExpressions {
  correctAnswerExpressions: number[];
  incorrectAnswerExpressions: number[];
}

export interface ProfileTabIcon {
  lightUrl: string;
}

export interface Brb {
  status: string;
}

export interface BrowserSettings {
  coachEnabled: boolean;
  completeReverseTranslationTypingEnabled: boolean;
  darkMode: string;
  listenDisabledUntil: number;
  speakDisabledUntil: number;
  transliterationsSettings: { [key: string]: TransliterationsSetting };
  typingEnabled: boolean;
}

export interface TransliterationsSetting {
  lang: string;
  trackingName: string;
  transliterateNewWordsOnly: boolean;
  type: TransliterationsSettingType;
  enabled: boolean;
}

export enum TransliterationsSettingType {
  Hiragana = "hiragana",
  Kana = "kana",
  Pinyin = "pinyin",
  Romaji = "romaji",
}

export interface Characters {
  characterState: CharacterStateClass;
  skippedAlphabetGateIds: CharacterStateClass;
}

export interface Config {
  ageRestrictionLimit: number;
  ipCountry: string;
  clientExperiments: ClientExperiments;
  speechHost: string;
  featureFlags: FeatureFlags;
}

export interface ClientExperiments {
  sfeat_web_clientside_experiment_test_fam_v2: SfeatWebClientsideExperimentTestFam;
  sfeat_web_clientside_experiment_test_fam: SfeatWebClientsideExperimentTestFam;
}

export interface SfeatWebClientsideExperimentTestFam {
  condition: Condition;
  rollout: number;
  conditions: Condition[];
  status: number;
}

export enum Condition {
  Control = "control",
  D12AndFeatures = "d12_and_features",
  Experiment = "experiment",
  ExperimentCopy = "experiment_copy",
  TwentyFivePercent = "twenty_five_percent",
  VerboseExplanation = "verbose_explanation",
}

export interface FeatureFlags {
  forum_sunset_frontend: boolean;
  web_enable_cantonese_from_chinese: boolean;
  web_api_rate_limited_sampling_rate: number;
  disable_ugc_cn: boolean;
  web_enable_chinese_from_japanese: boolean;
  web_enable_swedish_from_spanish: boolean;
  web_hide_alphabet_gates: boolean;
  forum_sunset_redirects: boolean;
  year_in_review_client_entry_profile: boolean;
  fullstory_recording_sampling_rate: number;
  china_compliance_control_new: boolean;
  web_enable_esperanto_from_french: boolean;
  web_enable_english_from_bengali: boolean;
  web_timeline_summaries_threshold: number;
  feed_microservice_web_client: boolean;
  web_v2_beta_opt_in_drawer: boolean;
  stories_web_maintenance: boolean;
  disable_avatars_global: boolean;
  disable_discussions: boolean;
  web_enable_haitian_from_english: boolean;
  web_enable_english_from_tagalog: boolean;
  enable_user_privacy_settings: boolean;
  web_achievements_v3_migration_retries: boolean;
  web_hide_path_rewards: boolean;
  web_frame_metrics_sampling_rate: number;
  web_enable_french_from_japanese: boolean;
  web_enable_korean_from_japanese: boolean;
  web_enable_b2b_page: boolean;
  leaderboard_reactions_rollout: boolean;
  web_frame_metrics_slow_frame_threshold: number;
  classes_hide_web_entrypoints: boolean;
  is_fullstory_recording_enabled_payment_element: boolean;
  job_board: boolean;
  web_enable_german_from_hungarian: boolean;
  china_compliance_control: boolean;
  disable_avatars_cn: boolean;
  web_timer_tracker_sampling_rate: number;
  web_api_not_acceptable_sampling_rate: number;
  web_enable_english_from_telugu: boolean;
  year_in_review_client_entry_home_message: boolean;
  web_enable_yiddish_from_english: boolean;
  web_redirect_press_microsite: boolean;
  web_enable_italian_from_german: boolean;
  onboarding_dogfooding_nag_delay_completed: number;
  web_use_onboarding_backend: boolean;
  web_enable_zulu_from_english: boolean;
  web_fetch_avatars_info: boolean;
  web_enable_xhosa_from_english: boolean;
  duocon_landing_page_status: number;
  web_achievements_v3_migration: boolean;
  alphabets_web_maintenance: boolean;
  web_send_jaeger_debug_id_in_admin_requests: boolean;
  disable_forum_posting: boolean;
  send_goals_progress: number;
  onboarding_dogfooding_nag_delay_ignored: number;
  forum_sunset_banner: boolean;
  web_enable_gaelic_from_english: boolean;
  allow_new_beta_applicants: boolean;
  show_merch_store_plushie_in_shop: boolean;
  is_fullstory_recording_enabled: boolean;
  linfra_hide_picker_web: boolean;
  web_fetch_leaderboard_streak: number;
  web_red_dot_tracking: number;
  web_leaderboard_stats_sampling_rate: number;
  web_midas_launch_ny22_subexp_1: number;
  disable_leagues_auto_refresh: boolean;
  web_enable_finnish_from_english: boolean;
  friends_microservice_web_client: boolean;
  forum_sunset_topbar: boolean;
}

export interface CourseHistories {
  "DUOLINGO_JA_ZH-CN": DUOLINGOJAZHCNClass;
  "DUOLINGO_ZH-HK_ZH-CN": DUOLINGOJAZHCNClass;
  "DUOLINGO_EN_ZH-CN": DUOLINGOJAZHCNClass;
}

export interface DUOLINGOJAZHCNClass {
  globalPlacementSessionStarts: number;
  globalPracticeSessionEnds: number;
  globalPracticeSessionStarts: number;
  mistakeHistory: any[];
  numSessionsWithMistakes: number;
}

export interface Courses {
  "DUOLINGO_JA_ZH-CN": CoursesDUOLINGOJAZHCN;
  "DUOLINGO_ZH-HK_ZH-CN": CoursesDUOLINGOENZHCN;
  "DUOLINGO_EN_ZH-CN": CoursesDUOLINGOENZHCN;
}

export interface CoursesDUOLINGOENZHCN {
  preload: boolean;
  placementTestAvailable: boolean;
  authorId: string;
  title: string;
  learningLanguage: string;
  xp: number;
  healthEnabled: boolean;
  fromLanguage: FromLanguage;
  id: string;
  crowns: number;
}

export enum FromLanguage {
  Ja = "ja",
  Zh = "zh",
}

export interface CoursesDUOLINGOJAZHCN {
  assignments: any[];
  progressVersion: number;
  managedInHouse: boolean;
  subject: string;
  pathSectioned: PathSectioned[];
  smartTips: any[];
  title: string;
  preload: boolean;
  trackingProperties: DUOLINGOJAZHCNTrackingProperties;
  placementDepth: null;
  ttsAccents: null;
  alphabetsPathProgressKey: null;
  numberOfWords: number;
  skills: Array<string[]>;
  path: any[];
  numberOfSentences: number;
  id: string;
  fromLanguage: FromLanguage;
  wordsLearned: number;
  fluency: null;
  authorId: string;
  finalCheckpointSession: string;
  pathDetails: PathDetails;
  storiesTabPromotionLocation: null;
  sections: DUOLINGOJAZHCNSection[];
  sideQuestProgress: CharacterStateClass;
  inLessonAvatars: any[];
  placementTestAvailable: boolean;
  learningLanguage: FromLanguage;
  crowns: number;
  extraCrowns: number;
  xp: number;
  topic: FromLanguage;
  healthEnabled: boolean;
  pathExperiments: any[];
  checkpointTests: any[];
  status: string;
}

export interface PathDetails {
  notifications: NotificationElement[];
  clientNotifications: ClientNotification[];
}

export interface ClientNotification {
  displayText: null;
  message: Message;
  type: string;
}

export interface Message {
  v2Intro: CharacterStateClass;
}

export interface NotificationElement {
  id: string;
  type: string;
}

export interface PathSectioned {
  index: number;
  debugName: string;
  type: string;
  completedUnits: number;
  totalUnits: number;
  units: Unit[];
  cefr: null;
  summary: null;
  exampleSentence: ExampleSentence | null;
  status: string;
}

export interface ExampleSentence {
  exampleSentence: string;
  transliterationJson: string;
}

export interface Unit {
  unitIndex: number;
  levels: LevelElement[];
  guidebook: Guidebook | null;
  teachingObjective: null | string;
  cefrLevel: null;
  unitNumber: number;
}

export interface Guidebook {
  url: string;
}

export interface LevelElement {
  id: string;
  state: LevelState;
  finishedSessions: number;
  pathLevelMetadata: PurplePathLevelMetadata;
  pathLevelClientData: PurplePathLevelClientData;
  totalSessions: number;
  debugName: string;
  hasLevelReview: boolean;
  type: LevelType;
  subtype: Subtype;
  isInProgressSequence: boolean;
  dailyRefreshInfo: DailyRefreshInfo | null;
}

export interface DailyRefreshInfo {
  nodeIndex: number;
  expiresAt: number;
}

export interface PurplePathLevelClientData {
  skillId?: null | string;
  crownLevelIndex?: number | null;
  hardModeLevelIndex?: number;
  teachingObjective?: string;
  assignmentInfo?: null;
  skillIds?: string[];
  isPathExtension?: boolean;
  unitIndex?: number;
  numberOfLegendarySessions?: number;
  storyId?: string;
  mode?: Subtype;
  eligibleModes?: Mode[];
  storyName?: string;
  fixedXpAward?: number;
  dailyRefreshIndex?: number;
  expiresAt?: number;
}

export enum Mode {
  Conversation = "CONVERSATION",
  Listen = "LISTEN",
  Read = "READ",
}

export enum Subtype {
  Chest = "chest",
  Practice = "practice",
  Read = "read",
  Regular = "regular",
  UnitReview = "unit_review",
}

export interface PurplePathLevelMetadata {
  skillId?: string;
  crownLevelIndex?: number;
  anchorSkillId?: string;
  indexSinceAnchorSkill?: number;
  treeId?: TreeID;
  unitIndex?: number;
  storyId?: string;
  mode?: Subtype;
  skillIds?: string[];
}

export enum TreeID { }

export enum LevelState {
  Active = "active",
  Legendary = "legendary",
  Locked = "locked",
  Passed = "passed",
  UnitTest = "unit_test",
}

export enum LevelType {
  Chest = "chest",
  Practice = "practice",
  Skill = "skill",
  Story = "story",
  UnitReview = "unit_review",
}

export interface DUOLINGOJAZHCNSection {
  checkpointAccessible: boolean;
  checkpointFinished: boolean;
  checkpointSessionType: string;
  masteryScore: null;
  name: string;
  numRows: number;
  summary: null;
  cefrLevel: null;
}

export interface DUOLINGOJAZHCNTrackingProperties {
  direction: string;
  learning_language: FromLanguage;
  ui_language: Locale;
  max_cefr_level: null;
  max_tree_level: number;
  max_section_index: number;
  skill_tree_id: TreeID;
  took_placementtest: boolean;
  course_subject: string;
  course_topic_id: FromLanguage;
  course_id: string;
  path_position_active_node_index: number;
  path_position_active_unit_index: number;
  path_position_active_section_index: number;
  path_position_active_section_cefr: null;
  path_uses_unit_vision: boolean;
}

export enum Locale {
  Ja = "ja",
  Zs = "zs",
}

export interface Debug {
  warnings: any[];
}

export interface Friends {
  assets: { [key: string]: Asset };
  drawer: null;
  feed: Feed;
  recommendationInfo: RecommendationInfo;
}

export interface Asset {
  iconDarkUrl?: null | string;
  iconStrokeDarkUrl: null | string;
  iconStrokeUrl: null | string;
  iconUrl: null | string;
}

export interface Feed {
  feed: any[];
  feedMetadata: FeedMetadata;
  kudosConfig: KudosConfig;
  sentenceConfig: SentenceConfig;
}

export interface FeedMetadata {
  showRedDot: boolean;
}

export interface KudosConfig {
  reactions: Reaction[];
  shareLabel: string;
}

export interface Reaction {
  reactionHoverAsset: string;
  reactionLabel: string;
  reactionSentLabel: string;
  reactionType: string;
}

export interface SentenceConfig {
  defaultReaction: string;
  reactions: Reaction[];
  shareLabel: string;
}

export interface RecommendationInfo {
  cursor: null;
  recommendations: any[];
  status: string;
}

export interface Goals {
  badges: Badge[];
  coreQuest: string;
  dailyQuest: string;
  difficulty: number;
  earnedBadges: EarnedBadge[];
  friendsQuest: FriendsQuest;
  hardQuest: string;
  lastSeenMonthlyChallengeId: string;
  lastSeenNextFriendsQuestStart: number;
  lastUpdated: number;
  monthlyChallengeProgressUpdate: number;
  monthlyQuest: string;
  monthlyQuestTheme: MonthlyQuestTheme;
  pendingRewards: any[];
  progress: { [key: string]: number };
  schema: Schema[];
}

export interface Badge {
  badgeId: string;
  category: Category;
  version: number;
  icon: Icon;
  title: Description;
  description: Description;
  iconVersions: IconVersions;
}

export enum Category {
  Monthly = "MONTHLY",
}

export interface Description {
  uiString: string;
  sourceId: number;
}

export interface Icon {
  enabled: ChallengeIntro;
  disabled: Disabled;
  hero?: Hero;
}

export interface Disabled {
  lightMode: LightMode;
  darkMode?: LightMode;
}

export interface LightMode {
  svg: string;
  pdf: string;
}

export interface ChallengeIntro {
  lightMode: LightMode;
}

export interface Hero {
  lightMode: HeroLightMode;
}

export interface HeroLightMode {
  lottie: string;
}

export interface IconVersions {
  v1: V1;
  v2: V2;
}

export interface V1 {
  enabled: Enabled;
  hero?: Hero;
}

export interface Enabled {
  lightMode: PurpleLightMode;
}

export interface PurpleLightMode {
  svg: string;
  pdf: string;
  png?: string;
}

export interface V2 {
  enabled: ChallengeIntro;
}

export interface EarnedBadge {
  badgeId: string;
  earned: boolean;
  earnedTimestamp: Date;
  earnedTimezone: string;
}

export interface FriendsQuest {
  lastSeenTotalProgress: number;
}

export interface MonthlyQuestTheme {
  themeId: string;
  template: TemplateEnum;
  version: number;
  lightModeColors: ModeColors;
  darkModeColors: ModeColors;
  progressBar: ProgressBar;
  images: Image[];
  text: Text[];
  illustrations: Illustrations;
  displayTexts: DisplayTexts;
}

export interface ModeColors {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface DisplayTexts {
  challengeIntro: Description;
}

export interface Illustrations {
  challengeIntro: ChallengeIntro;
  challengeSessionEnd: ChallengeIntro;
}

export interface Image {
  image: ChallengeIntro;
  component: string;
  origin: Origin;
  scale: Scale;
}

export interface Origin {
  x: string;
  y: string;
}

export interface Scale {
  x: number;
  y: number;
}

export interface ProgressBar {
  basic: CharacterStateClass;
}

export enum TemplateEnum {
  DailyQuests = "DAILY_QUESTS",
  FriendsQuests = "FRIENDS_QUESTS",
  MonthlyChallenges = "MONTHLY_CHALLENGES",
  MonthlyGoals = "MONTHLY_GOALS",
}

export interface Text {
  options: Option[];
  component: string;
  bounds: Bounds;
  style: string;
  lightModeColor: string;
  darkModeColor: string;
}

export interface Bounds {
  width: number;
}

export interface Option {
  text: Description;
}

export interface Schema {
  goalId: string;
  category: TemplateEnum;
  version: number;
  metric: string;
  threshold: number;
  period: Period;
  themeId?: string;
  badgeId?: string;
  title: Description;
  tiers?: number[];
  difficultyTiers?: DifficultyTier[];
  thresholdRange?: ThresholdRange;
}

export interface DifficultyTier {
  tiers: number[];
}

export interface Period {
  oneOff?: OneOff;
  recurring?: Recurring;
}

export interface OneOff {
  start: End;
  end: End;
}

export interface End {
  year: number;
  month: number;
  day: number;
}

export interface Recurring {
  freq: Freq;
  start: Start;
  until: Start;
  count: number;
  interval: number;
  duration?: Duration;
}

export interface Duration {
  days: number;
}

export enum Freq {
  Daily = "DAILY",
  Weekly = "WEEKLY",
}

export interface Start {
  year: number;
  month: number;
  day: number;
  hour?: number;
  timezone?: string;
}

export interface ThresholdRange {
  min: number;
  max: number;
  xpRate: number;
  roundToNearest: number;
}

export interface HeartsState {
  eligibleForFreeRefill: boolean;
  healthEnabled: boolean;
  hearts: number;
  maxHearts: number;
  overrideFreeHeartRefillLeft: number;
  overrideShowHeartsIntro: boolean;
  secondsPerHeartSegment: number;
  unlimitedHeartsAvailable: boolean;
  secondsUntilNextHeartSegment: number;
  useHealth: boolean;
  nextHeartRefillTimestampMs: number;
}

export interface Items {
  inventory: Inventory;
  shop: Shop;
  subscriptions: ItemsSubscriptions;
}

export interface Inventory {
  streak_freeze: StreakFreeze;
  xp_boost_15: StreakFreeze;
  xp_boost_stackable: StreakFreeze;
}

export interface StreakFreeze {
  purchaseId: string;
  purchaseDate: number;
  purchasePrice: number;
  itemName: string;
  quantity?: number;
}

export interface Shop {
  in_app_purchase: InAppPurchase[];
  isLoaded: boolean;
  misc: Misc;
}

export interface InAppPurchase {
  id: string;
  type: InAppPurchaseType;
  price: number;
  currencyType: InAppPurchaseCurrencyType;
  productId?: string;
  lastUsedDate?: number;
  value?: number;
  comparisonId?: string;
}

export enum InAppPurchaseCurrencyType {
  Usd = "USD",
  Xgm = "XGM",
}

export enum InAppPurchaseType {
  InAppPurchase = "in_app_purchase",
  Misc = "misc",
}

export interface Misc {
  streak_freeze: GeneralXPBoost;
  society_streak_freeze: InAppPurchase;
  duo_streak_freeze: InAppPurchase;
  streak_repair: GeneralXPBoost;
  health_shield: GeneralXPBoost;
  mastery_test: GeneralXPBoost;
  skill_test: GeneralXPBoost;
  heart_segment: GeneralXPBoost;
  heart_segment_reactive: InAppPurchase;
  skill_test_gems: GeneralXPBoost;
  skill_test_gems_200: GeneralXPBoost;
  levels_pacing_gems: GeneralXPBoost;
  final_level_attempt: InAppPurchase;
  final_level_attempt_50: InAppPurchase;
  final_level_attempt_25: InAppPurchase;
  hard_mode_gems_5: InAppPurchase;
  hard_mode_gems_20: InAppPurchase;
  hard_mode_gems_50: InAppPurchase;
  mistakes_practice_gems_20: InAppPurchase;
  mistakes_practice_gems_200: InAppPurchase;
  mistakes_practice_gems_5: InAppPurchase;
  mistakes_practice_gems_50: InAppPurchase;
  pronunciation_review_10_pack: InAppPurchase;
  pronunciation_review_5_pack: InAppPurchase;
  immersive_plus_gems_700: InAppPurchase;
  immersive_plus_gems_1000: InAppPurchase;
  row_blaster_150: InAppPurchase;
  row_blaster_250: InAppPurchase;
  legendary_keep_going: InAppPurchase;
  side_quest_entry: InAppPurchase;
  daily_quest_reroll: InAppPurchase;
  ramp_up_entry: GeneralXPBoost;
  gem_timer_boosts_1_250: InAppPurchase;
  gem_timer_boosts_1_450: InAppPurchase;
  gem_timer_boosts_5_1000: InAppPurchase;
  gem_timer_boosts_5_1800: InAppPurchase;
  gem_timer_boosts_15_2500: InAppPurchase;
  gem_timer_boosts_15_4500: InAppPurchase;
  gem_timer_boosts_1_330: InAppPurchase;
  gem_timer_boosts_5_1350: InAppPurchase;
  gem_timer_boosts_15_3350: InAppPurchase;
  health_refill: GeneralXPBoost;
  health_refill_reactive: GeneralXPBoost;
  health_refill_partial_1: InAppPurchase;
  health_refill_partial_2: InAppPurchase;
  health_refill_partial_3: InAppPurchase;
  health_refill_partial_4: InAppPurchase;
  health_refill_discounted: InAppPurchase;
  magic_chests_reentry_onboarding: InAppPurchase;
  magic_chests_reentry_tier_1: InAppPurchase;
  magic_chests_reentry_tier_2: InAppPurchase;
  magic_chests_reentry_tier_3: InAppPurchase;
  leaderboard_gem_wager_100: InAppPurchase;
  leaderboard_gem_wager_50: InAppPurchase;
  gem_wager: GemWager;
  xp_boost_stackable: InAppPurchase;
  society_streak_freeze_refill: InAppPurchase;
  general_xp_boost: GeneralXPBoost;
  xp_boost_15: GeneralXPBoost;
  xp_boost_60: InAppPurchase;
  unlimited_hearts_boost: GeneralXPBoost;
  early_bird_xp_boost: InAppPurchase;
  xp_boost_refill: InAppPurchase;
  xp_boost_15_gift: InAppPurchase;
}

export interface GemWager {
  id: string;
  name: string;
  type: InAppPurchaseType;
  localizedDescription: string;
  price: number;
  currencyType: InAppPurchaseCurrencyType;
  lastPurchaseDate: number;
  previousWagerDay: number;
  isActive: boolean;
}

export interface GeneralXPBoost {
  id: string;
  name: string;
  type: InAppPurchaseType;
  localizedDescription: string;
  price: number;
  currencyType: GeneralXPBoostCurrencyType;
  lastUsedDate?: number;
}

export enum GeneralXPBoostCurrencyType {
  Xgm = "XGM",
  Xlg = "XLG",
}

export interface ItemsSubscriptions {
  isLoaded: boolean;
  subscriptionPlans: SubscriptionPlan[];
}

export interface SubscriptionPlan {
  productId: string;
  isFamilyPlan: boolean;
  trackingProperties: SubscriptionPlanTrackingProperties;
  type: string;
  periodLengthInMonths: number;
  planCurrency: string;
  priceInCents: number;
  trialPeriodInDays: number;
  formattedMonthlyPrice: string;
  formattedPrice: string;
  isFreeTrial: boolean;
  isNewYears: boolean;
  planType: number;
  formattedHypotheticalYearlyPrice?: string;
}

export interface SubscriptionPlanTrackingProperties {
  subscription_tier: string;
  is_family_plan: boolean;
  free_trial_length: number;
  free_trial_period: boolean;
}

export interface NotificationValue {
  streak: boolean;
  translator_promotion: boolean;
  invite: boolean;
  pretty_datetime: string;
  datetime: Date;
  user: NotificationUser;
  unseen: boolean;
  pass: boolean;
  follow: boolean;
  translation: boolean;
  id: string;
  lingot_icon: boolean;
  streak_days: number;
  document_lingots: boolean;
  num_rupees: number;
  translation_lingots: boolean;
}

export interface NotificationUser {
  username: string;
  id: number;
  avatar: string;
}

export interface Player {
  challengeIdSections: Array<string[]>;
  challengeStates: ChallengeState[];
  coachDuo: CoachDuo;
  completedWithHeartsRemaining: boolean;
  confidence: number;
  currentInLessonStreak: number;
  currentIndex: number;
  enableBonusPoints: boolean;
  endedEarly: boolean;
  heartsType: string;
  inLessonTipResources: CharacterStateClass;
  inLessonTipShowing: boolean;
  isFinalLevel: boolean;
  key: number;
  maxHearts: number;
  maxInLessonStreak: number;
  mistakesReplacementChallengeIndex: number;
  numInLessonTipOpens: number;
  numTimesTransliterationToggled: number;
  receivedGifts: ReceivedGifts;
  recycledMistakeIndexToOriginalMistakeIndex: RecycledMistakeIndexToOriginalMistakeIndex;
  session: Session;
  sessionParams: PlayerSessionParams;
  sessionRouteParams: SessionRouteParams;
  sessionSubmitted: boolean;
  sessionSubmitting: boolean;
  sessionTime: number;
  shownSmartTipIds: any[];
  slideData: any[];
  status: string;
  strength: number;
  via: string;
  levelData: LevelData;
  speakIneligibleReasons: string[];
}

export interface ChallengeState {
  type: ChallengeStateType;
  guess?: any[] | GuessClass | number;
}

export interface GuessClass {
  tapTranslations: number[];
}

export enum ChallengeStateType {
  CharacterMatch = "characterMatch",
  CharacterSelect = "characterSelect",
  ListenTap = "listenTap",
  Translate = "translate",
}

export interface CoachDuo {
  allCharacters: string[];
  allShowReasons: string[];
  currentCorrectStreak: number;
  currentIncorrectStreak: number;
  model: Model;
}

export interface Model {
  showReason: string;
  template: TemplateClass;
}

export interface TemplateClass {
  animation: Animation;
  character: string;
  message: string;
  type: string;
}

export interface Animation {
  animation: number;
  animationInputName: string;
  artBoardName: string;
  endedStateName: string;
  playInputName: string;
  stateMachineName: string;
  subscription: number;
  subscriptionInputName: string;
  type: string;
  url: string;
}

export interface LevelData {
  levelIndex: number;
  unitIndex: number;
  level: LevelDataLevel;
  unitNumber: number;
}

export interface LevelDataLevel {
  id: string;
  state: LevelState;
  finishedSessions: number;
  pathLevelMetadata: FluffyPathLevelMetadata;
  pathLevelClientData: FluffyPathLevelClientData;
  totalSessions: number;
  debugName: string;
  hasLevelReview: boolean;
  type: LevelType;
  subtype: Subtype;
  isInProgressSequence: boolean;
  dailyRefreshInfo: null;
}

export interface FluffyPathLevelClientData {
  skillId: string;
  crownLevelIndex: number;
  hardModeLevelIndex: number;
  teachingObjective: string;
  assignmentInfo: null;
}

export interface FluffyPathLevelMetadata {
  skillId: string;
  crownLevelIndex: number;
}

export interface ReceivedGifts {
  fromMilestone: boolean;
  quantity: number;
  streakFreeze: boolean;
}

export interface RecycledMistakeIndexToOriginalMistakeIndex {
  "18": number;
}

export interface Session {
  id: string;
  learningLanguage: FromLanguage;
  fromLanguage: FromLanguage;
  type: string;
  challenges: SessionChallenge[];
  mistakesReplacementChallenges: any[];
  adaptiveInterleavedChallenges: AdaptiveInterleavedChallenges;
  metadata: SessionMetadata;
  ttsAnnotations: { [key: string]: TTSAnnotation };
  trackingProperties: SessionTrackingProperties;
  sessionStartExperiments: any[];
  levelSessionIndex: number;
  challengeTimeTakenCutoff: number;
  explanations: CharacterStateClass;
  progressUpdates: any[];
  isV2: boolean;
  pathExperiments: any[];
  showBestTranslationInGradingRibbon: boolean;
  sessionContext: SessionContext;
  sessionExperimentRecord: any[];
  experiments_with_treatment_contexts: CharacterStateClass;
  heartsLeft: number;
  startTime: number;
}

export interface AdaptiveInterleavedChallenges {
  challenges: AdaptiveInterleavedChallengesChallenge[];
  speakOrListenReplacementIndices: Array<number | null>;
}

export interface AdaptiveInterleavedChallengesChallenge {
  prompt: string;
  promptTransliteration: PromptTransliterationElement;
  correctSolutions?: string[];
  compactTranslations?: string[];
  correctTokens?: string[];
  wrongTokens?: string[];
  choices: Choice[];
  correctIndices?: number[];
  sourceLanguage?: FromLanguage;
  targetLanguage?: FromLanguage;
  grader?: Grader;
  taggedKcIds?: TaggedKcID[];
  weakWordPromptRanges?: any[];
  tokens?: ChallengeToken[];
  tts?: string;
  character?: Character;
  isSpeakerUniversal?: boolean;
  type: ChallengeStateType;
  id: string;
  challengeResponseTrackingProperties: PurpleChallengeResponseTrackingProperties;
  metadata: PurpleMetadata;
  newWords?: any[];
  progressUpdates: any[];
  sentenceId?: string;
  challengeGeneratorIdentifier: ChallengeGeneratorIdentifier;
  correctIndex?: number;
}

export interface ChallengeGeneratorIdentifier {
  specificType: string;
  generatorId: string;
}

export interface PurpleChallengeResponseTrackingProperties {
  path_uses_unit_vision: boolean;
  level_session_index: number;
  grading_graph_size?: number;
  num_tap_distractors?: number;
  highlighted_l1_weak_word_in_prompt?: boolean;
  num_correct_answer_tokens?: number;
  generation_timestamp: number;
  session_type: SessionTypeEnum;
  is_v2: boolean;
  tagged_kc_ids: string[];
}

export enum SessionTypeEnum {
  LexemeSkillLevelPractice = "lexeme_skill_level_practice",
}

export interface Character {
  url: string;
  image: LightMode;
  gender: string;
  correctAnimation: string;
  incorrectAnimation: string;
  idleAnimation: string;
  name: string;
  avatarIconImage: LightMode;
  riveAnimation: RiveAnimation;
}

export interface RiveAnimation {
  artBoardName: ArtBoardName;
  correctStateName: CorrectStateName;
  incorrectStateName: IncorrectStateName;
  notSetStateName: NotSetStateName;
  outfitInputName: OutfitInputName;
  stateMachineName: StateMachineName;
  url: string;
}

export enum ArtBoardName {
  Character = "Character",
}

export enum CorrectStateName {
  Correct = "Correct",
}

export enum IncorrectStateName {
  Incorrect = "Incorrect",
}

export enum NotSetStateName {
  Reset = "Reset",
}

export enum OutfitInputName {
  Outfit = "Outfit",
}

export enum StateMachineName {
  InLesson = "InLesson",
}

export interface Choice {
  text?: string;
  character?: string;
  tts?: string;
  textTransliteration?: PromptTransliterationElement;
}

export interface PromptTransliterationElement {
  tokens: PromptTransliterationToken[];
}

export interface PromptTransliterationToken {
  token: string;
  transliterationTexts: Transliteration[];
}

export interface Transliteration {
  text: string;
  type: TransliterationsSettingType;
}

export interface Grader {
  version: number;
  vertices: Array<Vertex[]>;
  language: FromLanguage;
  whitespaceDelimited: boolean;
}

export interface Vertex {
  to: number;
  lenient: string;
  orig?: string;
}

export interface PurpleMetadata {
  challenge_construction_insights: PurpleChallengeConstructionInsights;
  highlight?: any[];
  sentence?: string;
  sentence_transliteration?: SentenceTransliterationClass;
  solution_key: string;
  source_language: FromLanguage;
  target_language?: Locale;
  tokens?: string[];
  translation?: string;
  weak_word_prompt_ranges?: any[];
  wrong_tokens?: string[];
  teaching_kc_ids?: TeachingKcID[];
  text?: string;
  specific_type: string;
  lexeme_ids_to_update: string[];
  type: PurpleType;
  lexemes_to_update: string[];
  generic_lexeme_map: CharacterStateClass;
  num_comments?: number;
  learning_language: FromLanguage;
  from_language: Locale;
  correct_option_index?: number;
  options_with_tts?: OptionsWithTt[];
  transliteration?: string;
  transliteration_transliteration?: SentenceTransliterationClass;
}

export interface PurpleChallengeConstructionInsights {
  num_tap_distractors?: number;
  num_correct_answer_tokens?: number;
  highlighted_l1_weak_word_in_prompt?: boolean;
}

export interface OptionsWithTt {
  text: string;
  tts: string;
}

export interface SentenceTransliterationClass {
  tokens: SentenceTransliterationToken[];
}

export interface SentenceTransliterationToken {
  token: string;
  transliterations: Transliteration[];
}

export interface TeachingKcID {
  legacy_id: string;
  kc_type_str: KcTypeStr;
}

export enum KcTypeStr {
  Lex = "lex",
}

export enum PurpleType {
  CharacterMatch = "character_match",
  CharacterSelect = "character_select",
  ListenTap = "listen_tap",
  Translate = "translate",
}

export interface TaggedKcID {
  legacyId: string;
  kcTypeStr: KcTypeStr;
}

export interface ChallengeToken {
  value: string;
  tts?: string;
  hintTable?: HintTable;
}

export interface HintTable {
  headers: string[];
  rows: Array<Row[]>;
}

export interface Row {
  colspan: number;
  hint?: string;
  hintTransliteration?: PromptTransliterationElement;
}

export interface SessionChallenge {
  prompt?: string;
  promptTransliteration?: PromptTransliterationElement;
  correctSolutions?: string[];
  compactTranslations?: string[];
  correctTokens?: string[];
  wrongTokens?: string[];
  choices?: Choice[];
  correctIndices?: number[];
  sourceLanguage?: FromLanguage;
  targetLanguage?: FromLanguage;
  grader?: Grader;
  taggedKcIds?: TaggedKcID[];
  weakWordPromptRanges?: any[];
  tokens?: ChallengeToken[];
  tts?: string;
  character?: Character;
  isSpeakerUniversal?: boolean;
  type: ChallengeStateType;
  id: string;
  challengeResponseTrackingProperties: FluffyChallengeResponseTrackingProperties;
  metadata: FluffyMetadata;
  newWords?: any[];
  progressUpdates: any[];
  sentenceId?: string;
  challengeGeneratorIdentifier: ChallengeGeneratorIdentifier;
  worldCharacterShown?: boolean;
  startTime?: number;
  skipped?: boolean;
  timeTaken?: number;
  gradingResult?: GradingResult;
  correctIndex?: number;
  correctSolutionTransliterations?: PromptTransliterationElement[];
  solutionTts?: string;
  solutionTranslation?: string;
  slowTts?: string;
  pairs?: ChallengePair[];
  indicatorType?: string;
}

export interface FluffyChallengeResponseTrackingProperties {
  level_session_index: number;
  birdbrain_target?: number;
  cefr_subsection?: string;
  num_tap_distractors?: number;
  highlighted_l1_weak_word_in_prompt?: boolean;
  is_v2: boolean;
  path_uses_unit_vision: boolean;
  cefr_level?: CefrLevel;
  is_adaptive?: boolean;
  grading_graph_size?: number;
  birdbrain_source?: BirdbrainSource;
  num_correct_answer_tokens?: number;
  generation_timestamp: number;
  session_type: SessionTypeEnum;
  birdbrain_probability?: number;
  content_length?: number;
  tagged_kc_ids: string[];
  best_solution?: string;
}

export enum BirdbrainSource {
  BirdbrainV2 = "birdbrain_v2",
}

export enum CefrLevel {
  CefrUnknown = "CEFR_UNKNOWN",
}

export interface GradingResult {
  correct: boolean;
  guess?: any[] | string;
  blameMessage?: string;
  blameSubtext?: string;
}

export interface FluffyMetadata {
  challenge_construction_insights: FluffyChallengeConstructionInsights;
  highlight?: any[];
  sentence?: string;
  sentence_transliteration?: SentenceTransliterationClass;
  solution_key: string;
  source_language: Locale;
  target_language?: Locale;
  tokens?: string[];
  translation?: string;
  weak_word_prompt_ranges?: any[];
  wrong_tokens?: string[];
  teaching_kc_ids?: TeachingKcID[];
  text?: string;
  specific_type: string;
  lexeme_ids_to_update: string[];
  type: PurpleType;
  lexemes_to_update: string[];
  generic_lexeme_map: CharacterStateClass;
  num_comments?: number;
  learning_language: FromLanguage;
  from_language: Locale;
  correct_option_index?: number;
  options_with_tts?: OptionsWithTt[];
  transliteration?: string;
  transliteration_transliteration?: SentenceTransliterationClass;
  token_transliterations?: SentenceTransliterationClass[];
  translation_transliteration?: SentenceTransliterationClass;
  wrong_token_transliterations?: SentenceTransliterationClass[];
  language?: FromLanguage;
  solution_translation?: string;
  text_transliteration?: SentenceTransliterationClass;
  pairs?: MetadataPair[];
}

export interface FluffyChallengeConstructionInsights {
  birdbrain_probability?: number;
  birdbrain_target?: number;
  birdbrain_source?: BirdbrainSource;
  num_tap_distractors?: number;
  content_length?: number;
  num_correct_answer_tokens?: number;
  is_adaptive?: boolean;
  cefr_level?: CefrLevel;
  cefr_subsection?: string;
  highlighted_l1_weak_word_in_prompt?: boolean;
  best_solution?: string;
}

export interface MetadataPair {
  transliteration: string;
  transliteration_transliteration?: SentenceTransliterationClass;
  learning_character: string;
  tts: string;
}

export interface ChallengePair {
  transliteration: string;
  tokenTransliteration?: PromptTransliterationElement;
  character: string;
  tts: string;
}

export interface SessionMetadata {
  id: string;
  type: SessionTypeEnum;
  language: FromLanguage;
  from_language: Locale;
  experiments_with_treatment_contexts: CharacterStateClass;
  session_experiment_record: any[];
  session_construction_insights: SessionConstructionInsights;
  show_best_translation_in_grading_ribbon: boolean;
  session_context: SessionContext;
  skill_tree_id: TreeID;
  level_session_index: number;
}

export interface SessionConstructionInsights {
  challenge_pool_before_picking: any[];
  rejected_challenges_info: any[];
  num_challenges_after_default_quality_score_filtering: number;
  picked_challenges_info: PickedChallengesInfo;
  target_kcpool_size: number;
  target_kcids_uss: any[];
  target_kcstrength_scores_uss: any[];
}

export interface PickedChallengesInfo {
  challenges: any[];
  parent_target_kcids: CharacterStateClass;
  intentionally_covered_kcs: any[];
  challenge_to_intentionally_covered_kcs: CharacterStateClass;
}

export interface SessionContext {
  contextType: string;
}

export interface SessionTrackingProperties {
  percent_target_kc_coverage: number;
  skill_tree_id: TreeID;
  data_version: string;
  max_repeated_challenge_type_count: number;
  birdbrain_target: number;
  lexemes_were_reordered: boolean;
  uses_birdbrain_sorting: boolean;
  type: SessionTypeEnum;
  num_challenges_generated: number;
  is_shorter_than_expected: boolean;
  uses_birdbrain_picking: boolean;
  uss_target_kc_strength_scores: any[];
  num_challenges_after_failure_rate_filter: number;
  repeated_undirected_sentences_count: number;
  learning_language: FromLanguage;
  num_challenges_gt_tap: number;
  num_challenges_with_challenge_stats: number;
  max_repeated_challenge_type: string;
  generation_timestamp: number;
  target_kc_pool_size: number;
  max_repeated_sentence_count: number;
  max_repeated_challenge_count: number;
  max_repeated_undirected_sentence_count: number;
  sentences_count: number;
  num_challenges_gt: number;
  num_sensitive_content_filtered: number;
  distinct_sentences_count: number;
  num_adaptive_challenges_generated: number;
  num_challenges_gt_reverse_tap: number;
  num_challenges_gt_listen_tap: number;
  max_repeated_sentence: string;
  uses_birdbrain: boolean;
  birdbrain_probability_median: number;
  read_from_cache: boolean;
  num_challenges_generated_cefr_level_c2: number;
  num_challenges_generated_cefr_level_c1: number;
  num_adaptive_challenges_gt: number;
  from_language: Locale;
  sum_content_length: number;
  num_challenges_gt_select_pronunciation: number;
  birdbrain_probability_max: number;
  birdbrain_probability_min: number;
  birdbrain_probability_avg: number;
  max_consecutive_challenge_type_count: number;
  num_challenges_gt_character_match: number;
  expected_length: number;
  offline: boolean;
  activity_uuid: string;
  num_sensitivity_labels_of_user: number;
  num_challenges_generated_cefr_level_b1: number;
  avg_content_length: number;
  num_challenges_generated_cefr_level_b2: number;
  uss_target_kc_ids: any[];
  source_skill_ids: string;
  generation_app_version: string;
  max_consecutive_challenge_type: string;
  max_repeated_undirected_sentence: string;
  distinct_undirected_sentences_count: number;
  num_challenges_generated_cefr_level_a2: number;
  grading_graph_sizes_sum: number;
  num_challenges_generated_cefr_level_a1: number;
  num_challenges_generated_cefr_level_intro: number;
  num_challenges_gt_character_select: number;
}

export interface TTSAnnotation {
  visemes: string;
}

export interface PlayerSessionParams {
  challengeTypes: string[];
  fromLanguage: FromLanguage;
  isFinalLevel: boolean;
  isV2: boolean;
  juicy: boolean;
  learningLanguage: FromLanguage;
  locale: Locale;
  smartTipsVersion: number;
  levelIndex: number;
  pathExperiments: any[];
  skillIds: string[];
  type: string;
  levelSessionIndex: number;
}

export interface SessionRouteParams {
  pathUnitNumber: string;
  pathLevelNumber: string;
  type: string;
  isEarnbackSession: boolean;
}

export interface Profile {
  firstPersonSocialProfile: FirstPersonSocialProfile;
}

export interface FirstPersonSocialProfile {
  canFollow: boolean;
  followers: Followers;
  following: Followers;
  friendsInCommon: Followers;
  isFollowedBy: boolean;
  isFollowing: boolean;
  isVerified: boolean;
}

export interface Followers {
  cursor: null;
  totalUsers: number;
  users: any[];
}

export interface SessionCache {
  keys: string[];
}

export interface SessionEnd {
  slides: any[];
}

export interface Skill {
  accessible: boolean;
  decayed: boolean;
  finishedLessons: number;
  finishedLevels: number;
  indicatingNewContent: boolean;
  levels: number;
  strength: null;
  experimentIds: any[];
  experimentalLessons: any[];
  explanation: Explanation;
  finalLevelTimeLimit: number;
  hasLevelReview?: boolean;
  hasFinalLevel: boolean;
  iconId: number;
  id: string;
  lastLessonPerfect: boolean;
  lessons: number;
  name: string;
  perfectLessonStreak: number;
  shortName: string;
  skillType: SkillType;
  tipsAndNotes: null;
  urlName: string;
  fromLanguage: FromLanguage;
  learningLanguage: FromLanguage;
  row: number;
}

export interface Explanation {
  intro: null;
  title: string;
  url: string;
}

export enum SkillType {
  Normal = "NORMAL",
}

export interface Stories {
  audio: Audio;
  baseXp: number;
  isListenModeReadOption: boolean;
  listenModeCharacterIds: any[];
  masterVersion: boolean;
  mode: Mode;
  speakingDisabledLineIndex: number;
  storyAudioLoadState: string;
  trackingProperties: CharacterStateClass;
}

export interface Audio {
  instructionId: number;
  playState: string;
  seekTo: number;
  speed: number;
}

export interface Student {
  classrooms: any[];
  sessionActivities: any[];
}

export interface UI {
  availableModals: string[];
  canShowAgeRestrictedLeaderboardsIntro: boolean;
  canShowHomeMessage: boolean;
  didChangeSetting: boolean;
  drawerIsUhmManaged: boolean;
  homeMessagingClientState: UIHomeMessagingClientState;
  isAvatarUploading: boolean;
  isDimmedOverlayOpen: boolean;
  isInventoryFresh: boolean;
  isLoggingOut: boolean;
  isModalReallyOpen: boolean;
  isRequestingNotificationPermission: boolean;
  isShopItemsFresh: boolean;
  isSwitchingCourse: boolean;
  isUserModelFresh: boolean;
  microphonePermission: string;
  modalIsUhmManaged: boolean;
  modalShouldWaitForOverlay: boolean;
  online: boolean;
  purchasingItem: boolean;
  settingsSubmitting: any[];
  shouldUnmount: boolean;
  toastIsUhmManaged: boolean;
  viewportHeight: number;
  viewportWidth: number;
  appOffset: number;
}

export interface UIHomeMessagingClientState {
  dogfoodingPreview: boolean;
  maintenanceBreak: boolean;
  turningNotificationsOn: boolean;
  webToAppConversion: boolean;
  webToAppConversionAggressive: boolean;
  streakFreezeRecurringOffer: boolean;
  pathMigration: boolean;
  pathChange: boolean;
  mobileWebToAppConversion: boolean;
}

export interface UIPersisted {
  courseDailyRefreshShown: CharacterStateClass;
  homeMessagingClientState: UIPersistedHomeMessagingClientState;
  plusBannerShown: PlusBannerShown;
  reportedProfileUserIds: any[];
  sessionEndPlusAdShown: SessionEndPlusAdShown;
  streakExtendedTimesLastSevenDays: StreakExtendedTimesLastSevenDay[];
  leaderboardPositionState: LeaderboardPositionState;
  streakExplainer: StreakExplainer;
}

export interface UIPersistedHomeMessagingClientState {
  darkMode: DarkMode;
  streakFreezeRecurringOffer: StreakFreezeRecurringOffer;
}

export interface DarkMode {
  dontShow: boolean;
}

export interface StreakFreezeRecurringOffer {
  shows: number;
}

export interface LeaderboardPositionState {
  cohortId: string;
  lastPositionSeen: number;
  lastScoreSeen: number;
  placesMoved: number;
}

export interface PlusBannerShown {
  count: number;
  lastShown: number;
}

export interface SessionEndPlusAdShown {
  count: number;
}

export interface StreakExplainer {
  count: number;
  entryPointLastShown: number;
}

export interface StreakExtendedTimesLastSevenDay {
  timezoneOffsetMinutes: number;
  utcIsoDateString: Date;
}

export interface WelcomeUser {
  coachRecords: CoachRecords;
  explanationsSeen: CharacterStateClass;
  gemsConfig: GemsConfig;
  lingots: number;
  recentlySeenSmartTips: CharacterStateClass;
  sessionsCompleted: number;
  streakData: StreakData;
  emailSchoolsProductUpdate: boolean;
  blockerUserIds: any[];
  joinedClassroomIds: any[];
  hasFacebookId: boolean;
  trackingProperties: UserTrackingProperties;
  emailSchoolsPromotion: boolean;
  animationEnabled: boolean;
  totalXp: number;
  timezoneOffset: string;
  sessionCount: number;
  betaStatus: string;
  inviteURL: string;
  id: number;
  webNotificationIds: any[];
  emailClassroomJoin: boolean;
  lastResurrectionTimestamp: number;
  xpGains: XPGain[];
  blockedUserIds: any[];
  emailClassroomLeave: boolean;
  emailAnnouncement: boolean;
  emailSchoolsNewsletter: boolean;
  weeklyXp: number;
  lastStreak: LastStreak;
  streak: number;
  creationDate: number;
  emailPass: boolean;
  emailSchoolsAnnouncement: boolean;
  enableMicrophone: boolean;
  acquisitionSurveyReason: string;
  name: string;
  emailEditSuggested: boolean;
  xpGoal: number;
  emailResearch: boolean;
  enableSoundEffects: boolean;
  optionalFeatures: OptionalFeature[];
  practiceReminderSettings: PracticeReminderSettings;
  emailFollow: boolean;
  rewardBundles: RewardBundle[];
  timezone: string;
  globalAmbassadorStatus: CharacterStateClass;
  roles: string[];
  experiments: { [key: string]: Experiment };
  emailWeeklyProgressReport: boolean;
  emailAssignmentComplete: boolean;
  emailPromotion: boolean;
  emailEventsDigest: boolean;
  hasPlus: boolean;
  email: string;
  emailWeeklyReport: boolean;
  classroomLeaderboardsEnabled: boolean;
  persistentNotifications: string[];
  fromLanguage: FromLanguage;
  observedClassroomIds: any[];
  adsConfig: AdsConfig;
  hasGoogleId: boolean;
  emailStreamPost: boolean;
  referralInfo: ReferralInfo;
  privacySettings: string[];
  picture: string;
  canUseModerationTools: boolean;
  emailVerified: boolean;
  currentCourseId: string;
  emailAssignment: boolean;
  monthlyXp: number;
  learningLanguage: FromLanguage;
  enableSpeaker: boolean;
  username: string;
  courses: string[];
  plusDiscounts: PlusDiscount[];
  xpSummaries: { [key: string]: XPSummary };
  mistakeCountInfo: MistakeCountInfo;
  practiceHubInfo: PracticeHubInfo;
  wordsListSupportedCourses: WordsListSupportedCourses;
  lastSessionFinished: number;
}

export interface AdsConfig {
  units: CharacterStateClass;
  allowPersonalizedAds: boolean;
}

export interface CoachRecords {
  small_right_streak: BigRightStreak;
  big_right_streak: BigRightStreak;
  capstone_hard_exercises: BigRightStreak;
}

export interface BigRightStreak {
  lastShown: number;
  timesShownToday: number;
}

export interface Experiment {
  name: string;
  eligible: boolean;
  contexts: any[];
  treated: boolean;
  condition: Condition;
  destiny: Condition;
}

export interface GemsConfig {
  gems: number;
  gemsPerSkill: number;
  useGems: boolean;
}

export interface LastStreak {
  length: number;
  isAvailableForRepair: boolean;
}

export interface MistakeCountInfo {
  courseId: string;
  expirationTime: number;
  includeListening: boolean;
  includeSpeaking: boolean;
  mistakeCount: number;
}

export interface OptionalFeature {
  status: Status;
  id: string;
}

export enum Status {
  Available = "AVAILABLE",
  On = "ON",
}

export interface PlusDiscount {
  discountType: string;
  expirationTime: number;
}

export interface PracticeHubInfo {
  "DUOLINGO_JA_ZH-CN": PracticeHubInfoDUOLINGOJAZHCN;
}

export interface PracticeHubInfoDUOLINGOJAZHCN {
  courseId: string;
  featuredSession: FeaturedSession;
  featuredStory: FeaturedStory;
  timestampGenerated: number;
  timestampTabLastVisited: number;
  timestampMistakesLastVisited: number;
}

export interface FeaturedSession {
  completed: boolean;
  sessionParams: FeaturedSessionSessionParams;
}

export interface FeaturedSessionSessionParams {
  skillIds: string[];
  type: string;
  unitIndex: number;
}

export interface FeaturedStory {
  completed: boolean;
}

export interface PracticeReminderSettings {
  "zh-HK": En;
  en: En;
  ja: En;
}

export interface En {
  timeInMinutes: number;
  pushEnabled: boolean;
  useSmartReminderTime: boolean;
  emailEnabled: boolean;
}

export interface ReferralInfo {
  inviterName: null;
  isEligibleForOffer: boolean;
  unconsumedInviteeName: null;
  unconsumedInviteeIds: any[];
  numBonusesReady: number;
  hasReachedCap: boolean;
  isEligibleForBonus: boolean;
}

export interface RewardBundle {
  rewards: Reward[];
  id: string;
  empty: boolean;
  rewardBundleType: string;
}

export interface Reward {
  tags: any[];
  consumed: boolean;
  rewardType: RewardType;
  currency?: Currency;
  amount?: number;
  id: string;
  itemId?: string;
  items?: Item[];
}

export enum Currency {
  Gems = "GEMS",
}

export interface Item {
  count: number;
  itemType: string;
}

export enum RewardType {
  Chest = "CHEST",
  Direct = "DIRECT",
}

export interface StreakData {
  currentStreak: Streak;
  longestStreak: Streak;
  previousStreak: Streak;
}

export interface Streak {
  endDate: Date;
  length: number;
  lastExtendedDate?: Date;
  startDate: Date;
  achieveDate?: Date;
}

export interface UserTrackingProperties {
  disable_clubs: boolean;
  skill_tree_id: TreeID;
  disable_social: boolean;
  notification_sms_enabled: boolean;
  has_item_weekend_amulet: boolean;
  beta_shake_to_report_enabled: null;
  creation_age: number;
  has_item_gold_subscription: boolean;
  creation_date_new: Date;
  learning_language: FromLanguage;
  has_item_streak_wager: boolean;
  disable_discussions: boolean;
  beta_enrollment_status: string;
  placement_depth: null;
  num_sessions_completed: number;
  goal: number;
  premium_had_previous_item: boolean;
  level: number;
  disable_friends_quests: boolean;
  disable_leaderboards: boolean;
  streak: number;
  acquisition_survey_reason: string;
  notification_wechat_enabled: boolean;
  disable_third_party_tracking: boolean;
  notification_whatsapp_enabled: boolean;
  has_item_immersive_subscription: boolean;
  gems: number;
  user_id: number;
  distinct_id: number;
  has_item_streak_repair: boolean;
  disable_personalized_ads: boolean;
  utc_offset: number;
  course_topic_id: FromLanguage;
  has_picture: boolean;
  has_item_live_subscription: boolean;
  is_age_restricted: boolean;
  placement_section_index: null;
  num_followers: number;
  trial_account: boolean;
  prior_proficiency_onboarding: null;
  disable_stream: boolean;
  course_subject: string;
  has_item_premium_subscription: boolean;
  num_following: number;
  disable_kudos: boolean;
  direction: string;
  creation_date_millis: number;
  disable_profile_country: boolean;
  course_id: string;
  has_item_rupee_wager: boolean;
  num_item_streak_freeze: number;
  has_item_streak_freeze: boolean;
  learning_reason: string;
  disable_events: boolean;
  disable_mature_words: boolean;
  lingots: number;
  china_social_restricted: boolean;
  leaderboard_league: number;
  disable_immersion: boolean;
  username: string;
  ui_language: Locale;
}

export interface WordsListSupportedCourses {
  wordsListView: Words;
  wordsPracticeSession: Words;
}

export interface Words {
  supportedCourses: { [key: string]: string[] };
}

export interface XPGain {
  skillId: null | string;
  xp: number;
  eventType: string;
  time: number;
}

export interface XPSummary {
  gainedXp: number | null;
  frozen: boolean;
  streakExtended: boolean;
  date: number;
  userId: number;
  repaired: boolean;
  dailyGoalXp: number | null;
  numSessions: number | null;
  totalSessionTime: number | null;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toWelcome(json: string): Welcome {
    return JSON.parse(json);
  }

  public static welcomeToJson(value: Welcome): string {
    return JSON.stringify(value);
  }
}

/*
Analysis for personal information
*/

// Checking for tokens
// Checking for personal identification information
// Checking for API keys
// Checking for passwords
