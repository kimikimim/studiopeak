// ───────────────────────────────────────────────────────────
//  학원 데모 사이트 데이터
//  과목을 추가하려면 이 배열에 항목 하나만 추가하면
//  /demo/<slug> 페이지가 자동으로 생성됩니다.
//  (추후 math.studiopeak.site 등 서브도메인으로 분리 가능)
// ───────────────────────────────────────────────────────────

export interface Demo {
  slug: string;
  subject: string;
  academyName: string;
  futureDomain: string;
  theme: {
    accent: string;
    accentSoft: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
  };
  stats: { value: string; label: string }[];
  features: { title: string; desc: string }[];
  programs: { name: string; target: string; desc: string; time: string }[];
  teachers: { name: string; role: string; career: string }[];
  results: { value: string; label: string }[];
  schedule: { day: string; classes: string }[];
  contact: {
    phone: string;
    address: string;
    hours: string;
  };
}

export const demos: Demo[] = [
  {
    slug: 'math',
    subject: '수학',
    academyName: '피크수학학원',
    futureDomain: 'math.studiopeak.site',
    theme: { accent: '#3b82f6', accentSoft: '#dbeafe' },
    hero: {
      badge: '개념부터 실전까지 · 1:1 맞춤 관리',
      title: '수학, 다시 1등급으로.',
      subtitle:
        '진단평가로 약점을 찾고, 학생별 커리큘럼으로 채웁니다. 내신과 수능, 둘 다 잡는 피크수학의 검증된 학습 시스템.',
    },
    stats: [
      { value: '1:6', label: '소수정예 관리' },
      { value: '87%', label: '1등급 상승률' },
      { value: '12년', label: '누적 노하우' },
    ],
    features: [
      { title: '레벨별 정밀 진단', desc: '입학 진단평가로 단원별 약점을 분석하고 학생 맞춤 커리큘럼을 설계합니다.' },
      { title: '주 2회 클리닉', desc: '틀린 문제는 그날 잡습니다. 오답 클리닉으로 개념 구멍을 즉시 메웁니다.' },
      { title: '학부모 리포트', desc: '매주 학습량·테스트 결과를 리포트로 발송해 가정에서도 함께 관리합니다.' },
    ],
    programs: [
      { name: '중등 내신 集中', target: '중1~중3', desc: '학교별 기출 분석과 서술형 대비로 내신 만점에 도전.', time: '주 3회 · 120분' },
      { name: '고등 개념 마스터', target: '고1~고2', desc: '수학(상·하)부터 미적분까지 개념을 빈틈없이.', time: '주 3회 · 150분' },
      { name: '수능 실전 파이널', target: '고3·N수', desc: '실전 모의고사와 킬러문항 집중 훈련.', time: '주 4회 · 180분' },
    ],
    teachers: [
      { name: '강민혁 원장', role: '대표 강사 · 미적분', career: '前 대치동 대형학원 12년 · 서울대 수리과학부' },
      { name: '이서연 강사', role: '중등 내신 총괄', career: '내신 전문 8년 · 연세대 수학교육과' },
    ],
    results: [
      { value: '142명', label: '최근 1년 1등급 달성' },
      { value: '34명', label: '의·치·약 합격' },
      { value: '4.6점', label: '학부모 만족도(5점)' },
    ],
    schedule: [
      { day: '월·수·금', classes: '중등 내신반 / 고등 개념반' },
      { day: '화·목', classes: '고3 실전반 / 오답 클리닉' },
      { day: '토', classes: '주간 테스트 · 보충' },
    ],
    contact: { phone: '02-1234-5678', address: '서울 강남구 테헤란로 123, 4층', hours: '평일 14:00–22:00 · 토 10:00–18:00' },
  },
  {
    slug: 'english',
    subject: '영어',
    academyName: '피크영어학원',
    futureDomain: 'english.studiopeak.site',
    theme: { accent: '#06b6d4', accentSoft: '#cffafe' },
    hero: {
      badge: '원어민 회화 + 입시 영어',
      title: '읽고, 말하고, 시험까지.',
      subtitle:
        '원어민 회화로 자신감을, 체계적인 문법·독해로 성적을. 유아부터 수능까지 단계별로 완성하는 피크영어.',
    },
    stats: [
      { value: '4명', label: '원어민 전임 강사' },
      { value: '92%', label: '재등록률' },
      { value: '9년', label: '운영 경력' },
    ],
    features: [
      { title: '레벨 테스트 무료', desc: '리딩·리스닝·스피킹을 종합 진단해 정확한 반 배정을 도와드립니다.' },
      { title: '원어민 스피킹', desc: '주 2회 원어민 회화로 실전 표현과 발음을 자연스럽게 체득합니다.' },
      { title: '내신·수능 대비', desc: '학교별 기출과 수능 유형을 분석한 독해·어법 집중 트레이닝.' },
    ],
    programs: [
      { name: '키즈 파닉스', target: '7세~초2', desc: '소리와 글자를 연결하는 놀이형 파닉스로 영어의 첫걸음.', time: '주 2회 · 60분' },
      { name: '초·중등 회화', target: '초3~중3', desc: '원어민과 함께하는 주제별 스피킹 + 문법 기초.', time: '주 3회 · 90분' },
      { name: '수능 독해 마스터', target: '고1~고3', desc: '빈칸·순서·어법 유형별 풀이 전략과 실전 모의.', time: '주 3회 · 120분' },
    ],
    teachers: [
      { name: 'Daniel Park', role: '원어민 회화 총괄', career: 'TESOL 자격 · 미국 명문대 졸업 · 7년 강의' },
      { name: '정유진 강사', role: '입시 영어 총괄', career: '수능 영어 전문 10년 · 고려대 영문과' },
    ],
    results: [
      { value: '120명', label: '내신 1등급 달성' },
      { value: '88%', label: '수능 1·2등급 비율' },
      { value: '4.7점', label: '학부모 만족도(5점)' },
    ],
    schedule: [
      { day: '월·수·금', classes: '키즈 파닉스 / 초·중등 회화' },
      { day: '화·목', classes: '수능 독해반 / 내신 집중반' },
      { day: '토', classes: '원어민 스피킹 데이 · 보충' },
    ],
    contact: { phone: '02-2345-6789', address: '서울 강남구 테헤란로 123, 5층', hours: '평일 15:00–22:00 · 토 10:00–17:00' },
  },
];
