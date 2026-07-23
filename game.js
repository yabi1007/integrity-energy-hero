// v8.2 bundled build: question banks embedded to prevent stale/missing external scripts
window.GAME_BUILD_VERSION='9.4-final-polish';
// 이해충돌방지법 10가지 행동기준 기반 상황형 문제은행
// 유혹 슬라임 · 6문항

window.QUIZ_BANKS = window.QUIZ_BANKS || {};
window.QUIZ_BANKS.bribery = [
{
  "id": 1,
  "slimeName": "유혹 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "대가 있는 조언",
  "question": "직무관련 업체가 퇴근 후 개인 자문을 해 달라며 사례비를 제안했습니다. 업무시간 밖이고 기관 자료를 쓰지 않는다면 가장 적절한 대응은?",
  "choices": [
    "개인 시간의 활동이므로 사례비를 받고 자문한다.",
    "직무관련자에게 사적으로 조언·자문을 제공하고 대가를 받는 행위는 제한되므로 거절한다.",
    "사례비를 기관 계좌로 받으면 가능하다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "직무관련자에게 사적으로 노무·조언·자문을 제공하고 대가를 받는 행위는 직무 관련 외부활동 제한 대상입니다."
},
{
  "id": 2,
  "slimeName": "유혹 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "강의와 자문의 경계",
  "question": "소속기관 업무와 관련된 협회가 공개 세미나 강의를 요청했습니다. 가장 적절한 판단은?",
  "choices": [
    "직무 관련 지식을 제공하므로 어떤 경우에도 금지된다.",
    "외부강의에 해당해 허용될 수 있으나, 기관의 외부강의 신고·사례금 기준 등 관련 절차를 확인해야 한다.",
    "주최 측이 비영리단체이면 절차 없이 가능하다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "청탁금지법상 외부강의 등으로 사례금 수수가 허용되는 경우는 예외가 될 수 있으므로, 관련 신고와 기관 기준을 함께 확인해야 합니다."
},
{
  "id": 3,
  "slimeName": "유혹 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "기관 정보로 부업하기",
  "question": "공직자가 소속기관의 전문지식을 활용해 온라인 유료 강의를 개설하려 합니다. 가장 적절한 행동은?",
  "choices": [
    "공개된 지식이면 기관 확인 없이 바로 개설한다.",
    "수익을 가족 명의로 받으면 이해충돌 문제가 없다.",
    "직무 관련 지식·정보를 대가를 받고 제공하는 활동인지 확인하고, 필요한 경우 기관장의 허가를 받는다."
  ],
  "answer": 2,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "소속기관의 직무와 관련된 지식이나 정보를 대가를 받고 제공하는 행위는 제한되며, 법에서 정한 경우 기관장 허가가 필요할 수 있습니다."
},
{
  "id": 4,
  "slimeName": "유혹 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "업체와 중고거래",
  "question": "계약을 담당하는 공직자의 배우자가 해당 계약업체 대표에게 중고차를 판매했습니다. 공직자가 거래 사실을 뒤늦게 알았다면?",
  "choices": [
    "배우자의 개인 거래이므로 신고할 필요가 없다.",
    "직무관련자와 가족 간 거래에 해당할 수 있으므로 안 날부터 14일 이내 신고한다.",
    "시가대로 거래했으므로 신고하지 않아도 된다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "공직자 본인이나 일정 범위의 가족이 직무관련자와 금전·부동산·물품 등의 거래를 한 사실을 알게 되면 신고 대상이 될 수 있습니다."
},
{
  "id": 5,
  "slimeName": "유혹 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "무이자 차용",
  "question": "직무관련자가 “급할 때 쓰라”며 공직자에게 무이자로 돈을 빌려주겠다고 했습니다. 가장 적절한 대응은?",
  "choices": [
    "차용증을 쓰면 금품 수수가 아니므로 가능하다.",
    "이자를 나중에 지급하기로 구두 약속하면 가능하다.",
    "직무관련자와의 금전거래에 해당할 수 있으므로 거래를 피하고, 거래가 이루어졌다면 신고 여부를 확인한다."
  ],
  "answer": 2,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "직무관련자와의 금전거래는 직무관련자와의 거래 신고 대상이 될 수 있습니다. 차용증 작성만으로 이해충돌 우려가 사라지는 것은 아닙니다."
},
{
  "id": 6,
  "slimeName": "유혹 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "겸직 제안",
  "question": "감독 대상 기관이 공직자에게 비상근 자문위원 직위를 제안했습니다. 가장 적절한 대응은?",
  "choices": [
    "보수가 없으면 자유롭게 수락할 수 있다.",
    "직무와 관련된 다른 직위 취임에 해당할 수 있으므로 기관장 허가 여부를 확인한 뒤 결정한다.",
    "근무시간 외 활동이면 신고 없이 가능하다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "직무와 관련된 다른 직위에 취임하는 행위는 제한되며, 법이 허용하는 범위에서 소속기관장의 허가가 필요한 경우가 있습니다."
}
];


// 이해충돌방지법 10가지 행동기준 기반 상황형 문제은행
// 연줄 슬라임 · 6문항

window.QUIZ_BANKS = window.QUIZ_BANKS || {};
window.QUIZ_BANKS.connection = [
{
  "id": 1,
  "slimeName": "연줄 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "동창이 심사대상",
  "question": "지원사업 심사위원으로 배정된 공직자가 신청기업 대표가 대학 동기라는 사실을 알게 됐습니다. 가장 적절한 대응은?",
  "choices": [
    "친분이 깊지 않다면 그대로 심사한다.",
    "공정하게 평가할 자신이 있으면 별도 조치가 필요 없다.",
    "사적이해관계자에 해당하는지 신고하고 회피 신청 등 기관의 조치를 따른다."
  ],
  "answer": 2,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "직무관련자가 사적이해관계자임을 알게 된 경우 안 날부터 14일 이내 신고하고 회피를 신청해야 합니다."
},
{
  "id": 2,
  "slimeName": "연줄 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "가족의 공개채용",
  "question": "채용업무 담당자의 자녀가 소속기관의 공개경쟁 채용에 지원했습니다. 가장 적절한 설명은?",
  "choices": [
    "가족은 어떤 방식으로도 소속기관에 채용될 수 없다.",
    "경쟁절차를 거치는 채용까지 일률적으로 금지되는 것은 아니지만, 담당자는 이해관계를 신고하고 채용업무에서 배제되는 것이 적절하다.",
    "담당자가 면접에만 참여하지 않으면 신고할 필요가 없다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "가족 채용 제한은 원칙적으로 경쟁절차 없이 채용하는 경우를 제한합니다. 다만 담당자의 사적이해관계 신고·회피 문제는 별도로 검토해야 합니다."
},
{
  "id": 3,
  "slimeName": "연줄 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "형제의 수의계약",
  "question": "계약담당 공직자의 형제가 대표인 업체와 소속기관이 수의계약을 추진하고 있습니다. 가장 적절한 판단은?",
  "choices": [
    "계약금액이 소액이면 가능하다.",
    "공직자가 계약 과정에 관여하지 않겠다고 서약하면 가능하다.",
    "가족 및 관련 법인에 대한 수의계약 제한 대상인지 확인하고, 제한 대상이면 체결해서는 안 된다."
  ],
  "answer": 2,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "계약업무 담당 공직자와 그 가족 또는 관련 법인·단체는 법에서 정한 범위에서 수의계약 체결이 제한됩니다."
},
{
  "id": 4,
  "slimeName": "연줄 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "퇴직 선배와 골프",
  "question": "현재 직무관련자인 업체 임원이 1년 전 같은 기관에서 퇴직한 선배입니다. 주말 골프 약속을 잡았다면?",
  "choices": [
    "업무 이야기를 하지 않으면 신고할 필요가 없다.",
    "사적 모임이므로 기관과 무관하다.",
    "최근 2년 이내 퇴직한 직무관련자와의 골프이므로 원칙적으로 사전 신고한다."
  ],
  "answer": 2,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "최근 2년 이내 퇴직한 직무관련자와 골프·여행·사행성 오락을 하는 경우 원칙적으로 사전 신고해야 합니다."
},
{
  "id": 5,
  "slimeName": "연줄 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "갑작스러운 여행 동행",
  "question": "출장지에서 우연히 최근 퇴직한 직무관련자를 만나 일정 일부를 함께 여행하게 됐습니다. 사전 신고가 어려웠다면?",
  "choices": [
    "우연히 만났으므로 아무 조치도 하지 않는다.",
    "불가피한 사유가 인정될 수 있으므로 사후 14일 이내 신고한다.",
    "여행비를 각자 냈다면 신고 대상이 아니다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "불가피한 사유로 사전 신고하지 못한 경우에는 사적 접촉 후 14일 이내 신고할 수 있습니다."
},
{
  "id": 6,
  "slimeName": "연줄 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "배우자 회사와 계약",
  "question": "사업 담당 공직자의 배우자가 지분을 가진 회사가 담당 사업의 용역계약에 참여했습니다. 가장 먼저 할 일은?",
  "choices": [
    "배우자가 대표가 아니므로 그대로 업무를 수행한다.",
    "입찰 방식이 공개경쟁이면 이해충돌이 발생하지 않는다.",
    "사적이해관계자 신고·회피 대상인지 확인하고 즉시 기관 절차를 따른다."
  ],
  "answer": 2,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "경쟁 방식과 별개로 배우자 등 사적이해관계자가 직무관련자가 된 경우 신고·회피 의무가 발생할 수 있습니다."
}
];


// 이해충돌방지법 10가지 행동기준 기반 상황형 문제은행
// 정보보안 슬라임 · 6문항

window.QUIZ_BANKS = window.QUIZ_BANKS || {};
window.QUIZ_BANKS.security = [
{
  "id": 1,
  "slimeName": "정보보안 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "공고 전 투자",
  "question": "공직자가 아직 공개되지 않은 개발계획을 알고 인근 토지를 가족 명의로 매수하려 합니다. 가장 적절한 판단은?",
  "choices": [
    "가족 명의이므로 본인이 직접 이익을 얻는 것이 아니어서 가능하다.",
    "정보가 공식 발표되기 전에만 매도하지 않으면 된다.",
    "미공개 정보를 이용해 본인이나 제3자가 재산상 이익을 얻는 행위는 금지된다."
  ],
  "answer": 2,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "직무상 비밀 또는 미공개 정보를 이용해 본인이나 제3자가 재산상 이익을 취득하게 하는 행위는 금지됩니다."
},
{
  "id": 2,
  "slimeName": "정보보안 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "퇴직 후 정보 활용",
  "question": "공직자가 퇴직한 지 1년 뒤 재직 중 알게 된 미공개 사업정보로 투자했습니다. 가장 적절한 설명은?",
  "choices": [
    "퇴직하면 이해충돌방지법 적용이 끝나므로 가능하다.",
    "퇴직 후 3년이 지나지 않은 자도 직무상 비밀 등 이용 금지 대상에 포함될 수 있다.",
    "정보를 직접 유출하지 않았다면 문제없다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "직무상 비밀 등 이용 금지는 공직자가 아니게 된 날부터 3년이 지나지 않은 사람에게도 적용될 수 있습니다."
},
{
  "id": 3,
  "slimeName": "정보보안 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "친구에게 힌트",
  "question": "입찰 공고 전 공직자가 친구 업체에 “이번에는 가격보다 기술 점수가 중요할 것”이라고 귀띔했습니다. 친구가 실제 이익을 얻지 못했다면?",
  "choices": [
    "실제 계약을 따내지 못했으므로 위반이 아니다.",
    "미공개 정보를 사적 이익을 위해 이용하게 한 행위 자체가 문제가 될 수 있다.",
    "정확한 배점을 말하지 않았다면 괜찮다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "재산상 이익을 실제로 얻지 못했더라도 미공개 정보를 사적 이익을 위해 이용하거나 제3자가 이용하게 하는 행위는 금지될 수 있습니다."
},
{
  "id": 4,
  "slimeName": "정보보안 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "공개자료 재활용",
  "question": "기관 홈페이지에 이미 공개된 통계를 활용해 개인 연구논문을 작성했습니다. 가장 적절한 판단은?",
  "choices": [
    "공개된 정보까지 모두 직무상 비밀이므로 사용할 수 없다.",
    "공개정보라면 곧바로 위법은 아니지만, 기관 규정·저작권·겸직 등 다른 기준도 확인해야 한다.",
    "공직자가 만든 자료는 어떤 경우에도 개인 연구에 사용할 수 없다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "이미 공개된 정보는 일반적으로 미공개 정보와 다르지만, 다른 법령과 내부 규정 준수 여부는 별도로 확인해야 합니다."
},
{
  "id": 5,
  "slimeName": "정보보안 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "제3자의 책임",
  "question": "업체 대표가 공직자로부터 받은 자료가 미공개 내부정보임을 알면서 투자에 이용했습니다. 가장 적절한 설명은?",
  "choices": [
    "공직자만 처벌 대상이고 제3자는 책임이 없다.",
    "자료를 먼저 요구하지 않았다면 책임이 없다.",
    "미공개 정보임을 알면서 제공받아 재산상 이익을 얻은 제3자도 제재 대상이 될 수 있다."
  ],
  "answer": 2,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "제3자도 직무상 비밀 또는 미공개 정보임을 알면서 제공받거나 부정한 방법으로 취득해 이익을 얻으면 처벌될 수 있습니다."
},
{
  "id": 6,
  "slimeName": "정보보안 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "내부정보와 가족",
  "question": "공직자가 미공개 정책 변경 사실을 배우자에게 말했고, 배우자가 관련 주식을 매수했습니다. 공직자가 직접 매수하지 않았다면?",
  "choices": [
    "배우자의 독립된 판단이므로 문제가 없다.",
    "제3자인 배우자가 이익을 얻도록 정보를 제공한 경우도 금지될 수 있다.",
    "가족에게 말한 것은 외부 유출이 아니므로 괜찮다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "공직자 본인뿐 아니라 제3자로 하여금 미공개 정보를 이용해 이익을 얻도록 하는 행위도 금지됩니다."
}
];


// 이해충돌방지법 10가지 행동기준 기반 상황형 문제은행
// 공정 슬라임 · 6문항

window.QUIZ_BANKS = window.QUIZ_BANKS || {};
window.QUIZ_BANKS.fairness = [
{
  "id": 1,
  "slimeName": "공정 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "개발지구 내 토지",
  "question": "부동산 개발업무를 담당하지 않는 공직자의 배우자가 소속기관 개발사업 지구 안의 토지를 보유하고 있음을 알게 됐습니다. 가장 적절한 대응은?",
  "choices": [
    "개발업무 담당자가 아니므로 신고 대상이 아니다.",
    "배우자 명의이므로 신고 대상이 아니다.",
    "법이 정한 가족의 보유에 해당하는지 확인하고, 안 날부터 14일 이내 신고한다."
  ],
  "answer": 2,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "부동산 개발업무를 직접 수행하지 않는 공직자도 소속기관 개발사업 지구 내 본인 또는 가족의 부동산 보유·매수에 대해 신고의무가 발생할 수 있습니다."
},
{
  "id": 2,
  "slimeName": "공정 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "매수 신고 시점",
  "question": "공직자가 소속기관 개발사업 지구 안의 주택을 매수했습니다. 신고 시점으로 가장 적절한 것은?",
  "choices": [
    "매매계약서를 작성한 날부터 30일 이내다.",
    "등기 완료일부터 14일 이내다.",
    "실제 입주한 날부터 14일 이내다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "부동산 매수 신고는 원칙적으로 등기 완료일부터 14일 이내에 해야 합니다."
},
{
  "id": 3,
  "slimeName": "공정 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "고위공직자의 전 직장",
  "question": "새로 임용된 고위공직자가 임용 전 2년 동안 민간기업 고문으로 활동했습니다. 가장 적절한 조치는?",
  "choices": [
    "현재 그 기업과 관련된 업무가 생길 때만 제출한다.",
    "임용 전 3년 이내 민간부문 업무활동이므로 임용일부터 30일 이내 내역을 제출한다.",
    "보수를 받은 경우에만 제출한다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "고위공직자는 임용 또는 임기 개시 전 3년 이내의 민간부문 업무활동 내역을 30일 이내 제출해야 합니다."
},
{
  "id": 4,
  "slimeName": "공정 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "평가에서 빠지기만 하면?",
  "question": "공직자가 심사대상 업체 대표가 사촌임을 알고 스스로 채점에서만 빠졌습니다. 가장 적절한 설명은?",
  "choices": [
    "실제 채점하지 않았으므로 별도 신고는 필요 없다.",
    "동료에게만 알렸다면 공식 신고로 볼 수 있다.",
    "사적이해관계자 신고와 회피 신청 등 정식 절차를 밟아야 한다."
  ],
  "answer": 2,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "단순히 실무에서 빠지는 것만으로 신고의무가 사라지는 것은 아닙니다. 정식 신고·회피 절차를 따라야 합니다."
},
{
  "id": 5,
  "slimeName": "공정 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "공정하게 할 자신",
  "question": "공직자의 친한 친구가 인허가 신청인이 됐지만 공직자는 공정하게 처리할 자신이 있습니다. 가장 적절한 판단은?",
  "choices": [
    "주관적으로 공정할 수 있다는 판단과 신고의무는 별개이므로 사적이해관계 여부를 확인한다.",
    "처리 결과가 친구에게 불리하면 신고할 필요가 없다.",
    "친구가 부탁하지 않았다면 신고 대상이 아니다."
  ],
  "answer": 0,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "이해충돌 제도는 실제 편파 여부뿐 아니라 공정성에 대한 우려를 사전에 관리하기 위한 것입니다."
},
{
  "id": 6,
  "slimeName": "공정 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "신고 후 처리",
  "question": "공직자가 사적이해관계자를 신고했습니다. 이후 가장 적절한 행동은?",
  "choices": [
    "신고했으므로 기관 결정 전까지 평소처럼 계속 처리한다.",
    "기관장의 직무수행 조치가 내려지기 전까지 관련 절차와 담당관 안내를 따르고 자의적으로 판단하지 않는다.",
    "신고와 동시에 해당 직무를 영구히 맡을 수 없다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "신고 이후에는 기관이 직무수행 여부와 회피·대리자 지정 등 필요한 조치를 결정하므로 담당관 안내를 따라야 합니다."
}
];


// 이해충돌방지법 10가지 행동기준 기반 상황형 문제은행
// 갑질 슬라임 · 6문항

window.QUIZ_BANKS = window.QUIZ_BANKS || {};
window.QUIZ_BANKS.abuse = [
{
  "id": 1,
  "slimeName": "갑질 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "공용차량 주말 사용",
  "question": "공직자가 주말에 비어 있는 공용차량을 가족 이사에 사용하고, 연료비를 개인 돈으로 채웠습니다. 가장 적절한 판단은?",
  "choices": [
    "연료비를 냈으므로 사적 사용이 아니다.",
    "업무에 지장이 없으면 기관장 구두 허락만으로 가능하다.",
    "공공기관 차량을 사적 용도로 사용한 행위로 금지될 수 있다."
  ],
  "answer": 2,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "비용을 부담했는지와 관계없이 공공기관 소유·임차 물품이나 차량을 사적으로 사용·수익하는 행위는 금지됩니다."
},
{
  "id": 2,
  "slimeName": "갑질 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "빈 회의실 대여",
  "question": "부서장이 기관 회의실을 지인의 유료 강좌 장소로 빌려주었습니다. 기관은 사용료를 받지 않았습니다. 가장 적절한 설명은?",
  "choices": [
    "공직자 본인이 이익을 얻지 않았으므로 문제없다.",
    "제3자가 기관 시설을 사적으로 사용·수익하게 한 행위도 금지될 수 있다.",
    "업무시간 이후라면 제한이 없다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "공직자 본인뿐 아니라 제3자로 하여금 공공기관의 물품·시설 등을 사적으로 사용·수익하게 하는 것도 금지됩니다."
},
{
  "id": 3,
  "slimeName": "갑질 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "기관 장비로 개인사업",
  "question": "공직자가 점심시간에 기관 프린터로 가족 사업장의 홍보물 200장을 출력했습니다. 가장 적절한 판단은?",
  "choices": [
    "소모품 비용을 나중에 내면 괜찮다.",
    "점심시간이므로 직무와 무관해 가능하다.",
    "기관 물품의 사적 사용에 해당할 수 있으므로 해서는 안 된다."
  ],
  "answer": 2,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "기관 물품을 개인이나 가족의 사업을 위해 사용하는 것은 공공기관 물품 등의 사적 사용·수익 금지에 해당할 수 있습니다."
},
{
  "id": 4,
  "slimeName": "갑질 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "계약 담당자의 가족 업체",
  "question": "계약담당자가 자신의 배우자 업체와 수의계약을 체결하도록 후배에게 지시했습니다. 자신은 결재선에서 빠졌다면?",
  "choices": [
    "직접 결재하지 않았으므로 책임이 없다.",
    "지시·유도·묵인 역시 제한 위반으로 제재될 수 있다.",
    "계약금액이 예정가격 이하라면 가능하다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "제한 대상자와 수의계약을 체결하도록 지시·유도·묵인한 공직자도 제재 대상이 될 수 있습니다."
},
{
  "id": 5,
  "slimeName": "갑질 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "채용 담당자의 묵인",
  "question": "채용담당자가 자신의 가족이 경쟁절차 없이 채용되는 사실을 알면서도 “인사부가 결정한 일”이라며 묵인했습니다. 가장 적절한 설명은?",
  "choices": [
    "본인이 직접 채용 지시를 하지 않았으므로 문제없다.",
    "가족 채용을 지시·유도·묵인한 경우도 제재될 수 있다.",
    "수습직이면 가족 채용 제한이 적용되지 않는다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "가족이 경쟁절차 없이 채용되도록 지시·유도하거나 이를 묵인한 공직자도 제재 대상이 될 수 있습니다."
},
{
  "id": 6,
  "slimeName": "갑질 슬라임",
  "slimeQuote": "한 번 더 생각해 봐!",
  "title": "공공시설의 개인 수익",
  "question": "공직자가 기관 창고 일부를 지인에게 무료로 빌려주고, 지인은 그 공간에서 물품을 판매했습니다. 공직자가 돈을 받지 않았다면?",
  "choices": [
    "공직자가 수익을 얻지 않았으므로 허용된다.",
    "제3자가 기관 시설을 사적으로 사용하고 수익하게 했으므로 금지 대상이 될 수 있다.",
    "기관 물품이 아니라 건물이므로 적용되지 않는다."
  ],
  "answer": 1,
  "correctText": "정답! 이해충돌을 정확히 판단했습니다.",
  "wrongText": "아쉽습니다. 행동기준을 다시 확인해 보세요.",
  "explain": "금지 대상에는 물품뿐 아니라 건물·토지·시설 등이 포함되며, 제3자가 사적으로 사용·수익하게 하는 행위도 포함됩니다."
}
];



'use strict';
const GAME_BUILD='9.4';
const c=document.getElementById('c'),ctx=c.getContext('2d');
const W=1280,H=720,G=600,WORLD=4100;
// 플랫폼 이미지의 실제 윗면과 캐릭터 발이 만나는 공통 기준선
const PLATFORM_SURFACE_Y=598;
// 캐릭터 이미지에서 실제 발바닥이 보이는 시각적 기준선
const CHARACTER_FOOT_Y=604;
const K={},P={};
const IS_TOUCH=('ontouchstart' in window)||navigator.maxTouchPoints>0||matchMedia('(pointer:coarse)').matches;
const mobilePointers=new Map();
function setVirtualKey(key,down,oneShot=false){
 // 결과 화면에서는 모바일 공격/방패 버튼 입력도 전부 무시한다.
 if(S==='clear'){
  K[key]=0;
  delete P[key];
  return;
 }
 if(down){if(oneShot||!K[key])P[key]=1;K[key]=1}else K[key]=0;
}
function bindTouchButton(id,key,{oneShot=false}={}){
 const el=document.getElementById(id); if(!el)return;
 const press=e=>{e.preventDefault();e.stopPropagation();try{el.setPointerCapture(e.pointerId)}catch(_){};mobilePointers.set(e.pointerId,{el,key});el.classList.add('pressed');setVirtualKey(key,true,oneShot)};
 const release=e=>{const item=mobilePointers.get(e.pointerId);if(!item||item.el!==el)return;e.preventDefault();e.stopPropagation();mobilePointers.delete(e.pointerId);el.classList.remove('pressed');setVirtualKey(key,false)};
 el.addEventListener('pointerdown',press,{passive:false});
 ['pointerup','pointercancel','lostpointercapture'].forEach(t=>el.addEventListener(t,release,{passive:false}));
 el.addEventListener('contextmenu',e=>e.preventDefault());
}
bindTouchButton('btn-left','arrowleft');
bindTouchButton('btn-right','arrowright');
bindTouchButton('btn-attack','z',{oneShot:true});
bindTouchButton('btn-shield','x',{oneShot:true});
addEventListener('blur',()=>{for(const k of ['arrowleft','arrowright','z','x'])K[k]=0;document.querySelectorAll('.touch-btn').forEach(b=>b.classList.remove('pressed'));mobilePointers.clear()});
document.addEventListener('visibilitychange',()=>{if(document.hidden){for(const k of ['arrowleft','arrowright','z','x'])K[k]=0}});
document.addEventListener('touchmove',e=>e.preventDefault(),{passive:false});

let S='loading',T=0,last=0,cam=0,rec=0,life=3,done=0;
let pl,foes,boss,missiles=[],bursts=[],hitSparks=[],toxicBits=[];

let quizActive=false,currentQuiz=null,quizAnswered=false;

const quizUI={
 overlay:document.getElementById('quiz-overlay'),
 quote:document.getElementById('quiz-slime-quote'),
 title:document.getElementById('quiz-title'),
 question:document.getElementById('quiz-question'),
 choices:document.getElementById('quiz-choices'),
 result:document.getElementById('quiz-result'),
 resultTitle:document.getElementById('quiz-result-title'),
 resultExplain:document.getElementById('quiz-result-explain'),
 continueBtn:document.getElementById('quiz-continue')
};

function getQuizBank(type){
 const banks=window.QUIZ_BANKS||{};
 return Array.isArray(banks[type])?banks[type]:[];
}

function openSlimeQuiz(type, expectedSlimeName=''){
 if(!quizUI.overlay)return;
 const bank=getQuizBank(type);
 if(!bank.length){
  console.warn('퀴즈 데이터가 없습니다:',type);
  return;
 }

 // 처치한 슬라임의 전용 문제은행만 사용한다.
 const matchedBank=expectedSlimeName
  ? bank.filter(q=>q.slimeName===expectedSlimeName)
  : bank;
 const sourceBank=matchedBank.length?matchedBank:bank;
 currentQuiz=sourceBank[Math.floor(Math.random()*sourceBank.length)];
 currentQuiz={...currentQuiz, slimeName:expectedSlimeName||currentQuiz.slimeName, quizType:type};
 quizActive=true;
 quizAnswered=false;

 for(const k of ['arrowleft','arrowright','a','d','z','k','x','l',' ','arrowup','w']){
  K[k]=0;
  delete P[k];
 }

 quizUI.quote.textContent='“'+currentQuiz.slimeQuote+'”';
 quizUI.title.textContent=(currentQuiz.slimeName?currentQuiz.slimeName+' · ':'')+currentQuiz.title;
 quizUI.question.textContent=currentQuiz.question;
 quizUI.choices.innerHTML='';
 quizUI.result.classList.remove('active');
 quizUI.continueBtn.classList.remove('active');
 quizUI.resultTitle.textContent='';
 quizUI.resultExplain.textContent='';

 const choiceLabels=['①','②','③','④'];
 const visibleChoices=Array.isArray(currentQuiz.choices)?currentQuiz.choices.slice(0,4):[];
 visibleChoices.forEach((choice,index)=>{
  const button=document.createElement('button');
  button.type='button';
  button.className='quiz-choice';
  button.textContent=(choiceLabels[index]||String(index+1)+'.')+' '+choice;
  button.addEventListener('click',e=>{
   e.preventDefault();
   e.stopPropagation();
   answerSlimeQuiz(index);
  });
  quizUI.choices.appendChild(button);
 });

 quizUI.overlay.classList.add('active');
 quizUI.overlay.setAttribute('aria-hidden','false');
}

function answerSlimeQuiz(selectedIndex){
 if(!quizActive||quizAnswered||!currentQuiz)return;
 quizAnswered=true;

 const correct=selectedIndex===currentQuiz.answer;
 if(correct) rec=Math.min(100,rec+15);
 quizUI.resultTitle.textContent=correct?currentQuiz.correctText:currentQuiz.wrongText;
 quizUI.resultExplain.textContent=currentQuiz.explain;
 quizUI.result.classList.add('active');
 quizUI.continueBtn.classList.add('active');

 [...quizUI.choices.children].forEach((button,index)=>{
  button.disabled=true;
  if(index===currentQuiz.answer)button.style.outline='3px solid #66efb3';
  else if(index===selectedIndex&&!correct)button.style.outline='3px solid #ff7589';
 });
}

function closeSlimeQuiz(){
 if(!quizActive||!quizAnswered)return;
 quizActive=false;
 currentQuiz=null;
 quizAnswered=false;
 quizUI.overlay.classList.remove('active');
 quizUI.overlay.setAttribute('aria-hidden','true');
 quizUI.choices.innerHTML='';
}

if(quizUI.continueBtn){
 quizUI.continueBtn.addEventListener('click',e=>{
  e.preventDefault();
  e.stopPropagation();
  closeSlimeQuiz();
 });
}
if(quizUI.overlay)quizUI.overlay.addEventListener('click',e=>e.stopPropagation());

const resultUI={
 overlay:document.getElementById('result-actions'),
 restartBtn:document.getElementById('result-restart')
};

function setResultOverlay(show){
 if(!resultUI.overlay)return;
 resultUI.overlay.classList.toggle('active',show);
 resultUI.overlay.setAttribute('aria-hidden',show?'false':'true');
}

if(resultUI.restartBtn){
 resultUI.restartBtn.addEventListener('click',e=>{
  e.preventDefault();
  e.stopPropagation();
  if(S==='clear')scene('title');
 });
}


const paths={
 title:'assets/title-screen.png',
 sky:'assets/stage/sky.png', cloud:'assets/stage/cloud.png',
 mountain:'assets/stage/mountain.png', building:'assets/stage/building.png',
 platform:'assets/stage/platform.png', turbine:'assets/stage/wind_turbine.png',
 solar:'assets/stage/solar_panel.png', slime:'assets/stage/slime.png',
 boss:'assets/stage/boss.png',
 playerFull:'assets/player/player_full.png',
 shield:'assets/player/shield.png',
 head:'assets/player/head.png', bodyPart:'assets/player/body.png',
 leg:'assets/player/leg.png', sword:'assets/player/sword.png'
};
const A={};
Promise.all(Object.entries(paths).map(([k,p])=>new Promise((res,rej)=>{
 const im=new Image(); im.onload=()=>{A[k]=im;res()}; im.onerror=()=>rej(new Error(p)); im.src=p;
}))).then(()=>{document.getElementById('loading').remove();S='title'}).catch(err=>{
 document.getElementById('loading').textContent='에셋 로드 실패: '+err.message;
});

onkeydown=e=>{
 const k=e.key.toLowerCase();

 // 최종 청렴도 화면에서는 모든 게임 진행 키를 입력 단계부터 완전히 차단한다.
 // 공격키를 누른 채 보스를 처치해도 결과 화면이 넘어가지 않는다.
 if(S==='clear'){
  if(['z','k','enter',' ','x','l','arrowup','w'].includes(k)){
   e.preventDefault();
   e.stopPropagation();
  }
  K[k]=0;
  delete P[k];
  return false;
 }

 if(!K[k])P[k]=1;
 K[k]=1;
 if([' ','arrowup','arrowdown','arrowleft','arrowright'].includes(k))e.preventDefault();
};
onkeyup=e=>K[e.key.toLowerCase()]=0;
c.addEventListener('click',()=>{
 if(S==='title') scene('intro');
 else if(S==='gameover'||S==='end') scene('title');
 // clear 화면은 인증샷 보존을 위해 캔버스 클릭으로 넘어가지 않는다.
});

function cl(v,a,b){return Math.max(a,Math.min(b,v))}
function hit(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y}
function txt(s,x,y,size=24,color='#fff',align='center'){
 ctx.font=`700 ${size}px Arial,"Malgun Gothic",sans-serif`;ctx.textAlign=align;ctx.fillStyle=color;
 ctx.strokeStyle='rgba(0,0,0,.45)';ctx.lineWidth=Math.max(2,size/9);ctx.strokeText(s,x,y);ctx.fillText(s,x,y);
}
function rr(x,y,w,h,r,fill,stroke){
 ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();
 if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.stroke()}
}
function scene(s){
 S=s;T=0;
 setResultOverlay(s==='clear');
 if(s==='game')reset();
}
function reset(){
 setResultOverlay(false);
 quizActive=false;currentQuiz=null;quizAnswered=false;
 if(quizUI.overlay){
  quizUI.overlay.classList.remove('active');
  quizUI.overlay.setAttribute('aria-hidden','true');
 }
 rec=0;life=3;done=0;cam=0;missiles=[];bursts=[];hitSparks=[];toxicBits=[];
 pl={x:150,y:G-128,w:62,h:125,vx:0,vy:0,on:1,dir:1,atk:0,atkCd:0,atkSeq:0,sh:0,shCd:0,inv:0};
 const slimeTypes=[
  {id:'temptation',label:'유혹 슬라임',quizType:'bribery'},
  {id:'connection',label:'연줄 슬라임',quizType:'connection'},
  {id:'security',label:'정보보안 슬라임',quizType:'security'},
  {id:'fairness',label:'공정 슬라임',quizType:'fairness'},
  {id:'abuse',label:'갑질 슬라임',quizType:'abuse'}
 ];
 foes=[620,1080,1540,2200,2780].map((x,i)=>({x,y:PLATFORM_SURFACE_Y-72,w:108,h:72,hp:2,dir:i%2?1:-1,alive:1,lastHit:-1,slimeIndex:i,...slimeTypes[i]}));
 boss={x:3650,y:PLATFORM_SURFACE_Y-330,w:390,h:330,hp:24,max:24,active:0,alive:1,lastHit:-1,phase:'wait',intro:0,attackTimer:3.6,postShotDelay:0,countdown:0,flash:0,shotNo:0,charging:0};
}

function drawCover(img,x,y,w,h,alpha=1){
 if(!img)return;ctx.save();ctx.globalAlpha=alpha;
 const r=Math.max(w/img.width,h/img.height),sw=w/r,sh=h/r,sx=(img.width-sw)/2,sy=(img.height-sh)/2;
 ctx.drawImage(img,sx,sy,sw,sh,x,y,w,h);ctx.restore();
}
function drawContain(img,x,y,w,h,alpha=1,flip=false,rot=0,ox=.5,oy=.5){
 if(!img)return;ctx.save();ctx.globalAlpha=alpha;ctx.translate(x+w*ox,y+h*oy);ctx.rotate(rot);if(flip)ctx.scale(-1,1);
 const r=Math.min(w/img.width,h/img.height),dw=img.width*r,dh=img.height*r;
 ctx.drawImage(img,-dw*ox,-dh*oy,dw,dh);ctx.restore();
}


function drawCropped(img,sx,sy,sw,sh,x,y,w,h,alpha=1,flip=false){
 if(!img)return;ctx.save();ctx.globalAlpha=alpha;
 ctx.translate(x+w/2,y+h/2);if(flip)ctx.scale(-1,1);
 ctx.drawImage(img,sx*img.width,sy*img.height,sw*img.width,sh*img.height,-w/2,-h/2,w,h);
 ctx.restore();
}

function bg(recovery=0){
 drawCover(A.sky,0,0,W,H);
 let off=(performance.now()/55)%760;
 for(let x=-off-760;x<W+760;x+=760)drawContain(A.cloud,x,30,760,260,.28);
 let mx=-(cam*.12%1500)-180;
 for(let x=mx-1500;x<W+1500;x+=1500)drawContain(A.mountain,x,150,1500,480,.8);

 // v5.0.2: 원경의 건물과 발전시설이 하늘에 떠 보이지 않도록
 // 산 아래부터 플랫폼 뒤까지 이어지는 지면 레이어를 만든다.
 const landShift=-(cam*.20%900);
 ctx.save();
 ctx.translate(landShift,0);
 for(let x=-900;x<W+1800;x+=900){
   ctx.fillStyle='#334b3c';
   ctx.beginPath();
   ctx.moveTo(x,492);
   ctx.quadraticCurveTo(x+180,444,x+360,485);
   ctx.quadraticCurveTo(x+585,528,x+900,472);
   ctx.lineTo(x+900,H);ctx.lineTo(x,H);ctx.closePath();ctx.fill();
   ctx.fillStyle='#24382f';
   ctx.beginPath();
   ctx.moveTo(x,525);
   ctx.quadraticCurveTo(x+240,487,x+465,524);
   ctx.quadraticCurveTo(x+700,558,x+900,510);
   ctx.lineTo(x+900,H);ctx.lineTo(x,H);ctx.closePath();ctx.fill();
 }
 ctx.restore();

 // 평평한 도시 부지와 얇은 도로를 더해 건물의 바닥 기준선을 분명하게 한다.
 ctx.fillStyle='#1b2a27';ctx.fillRect(0,536,W,H-536);
 ctx.fillStyle='rgba(137,162,129,.20)';ctx.fillRect(0,536,W,8);
 ctx.fillStyle='rgba(18,28,31,.72)';ctx.fillRect(0,566,W,28);
 ctx.fillStyle='rgba(220,213,151,.20)';
 for(let x=-(cam*.34%150);x<W+150;x+=150)ctx.fillRect(x,578,72,3);

 let bx=-(cam*.28%620)-80;
 for(let x=bx-620;x<W+620;x+=620){
   // 건물 아래 접지 그림자
   ctx.fillStyle='rgba(3,8,12,.34)';ctx.beginPath();ctx.ellipse(x+260,574,176,18,0,0,Math.PI*2);ctx.fill();
   drawContain(A.building,x,285,520,320,.62);
 }
 // 건물 하단을 잔풀/관목 띠가 살짝 덮어 접지감을 강화한다.
 ctx.fillStyle='#162a23';
 for(let x=-(cam*.25%110)-30;x<W+120;x+=110){
   ctx.beginPath();ctx.arc(x,563,28,0,Math.PI*2);ctx.arc(x+30,557,34,0,Math.PI*2);ctx.arc(x+63,565,25,0,Math.PI*2);ctx.fill();
 }
 const dark=1-recovery/100;
 ctx.fillStyle=`rgba(4,10,20,${.42*dark})`;ctx.fillRect(0,0,W,H);
}

function ground(){
 const PLATFORM_LIFT=34;
 ctx.save();ctx.translate(-cam,0);
 for(let x=0;x<WORLD;x+=492)drawCover(A.platform,x,G-PLATFORM_LIFT,510,125);
 ctx.fillStyle='#09121d';ctx.fillRect(0,G+118-PLATFORM_LIFT,WORLD,184);
 // v5.0.3: 발전시설의 하단을 플랫폼 실제 윗면 기준선에 정확히 고정한다.
 const props=[
  {img:A.turbine,x:750,w:170,h:300,flip:false},
  {img:A.solar,x:1370,w:190,h:130,flip:true},
  {img:A.turbine,x:2410,w:165,h:290,flip:false},
  {img:A.solar,x:2920,w:190,h:125,flip:true}
 ];
 props.forEach(p=>{
   // 원본 이미지 내부의 넓은 상하 여백을 잘라낸 뒤, 보이는 오브젝트의 바닥을
   // 캐릭터의 실제 발바닥 기준선에 정확히 맞춘다.
   const isSolar=p.img===A.solar;
   const crop=isSolar
     ? {sx:.12,sy:.24,sw:.80,sh:.58}
     : {sx:.21,sy:.04,sw:.59,sh:.82};
   const drawH=p.h;
   const y=CHARACTER_FOOT_Y-drawH;
   drawCropped(p.img,crop.sx,crop.sy,crop.sw,crop.sh,p.x,y,p.w,drawH,.92,p.flip);
 });
 ctx.restore();
}

function playerRig(screenX,footY,scale=1,attack=0,guard=0,flip=false){
 ctx.save();
 ctx.translate(screenX,footY);
 if(flip)ctx.scale(-1,1);

 const moving=Math.abs(pl?.vx||0)>20&&pl?.on;
 const bob=moving?Math.abs(Math.sin(performance.now()/90))*2:0;
 const FOOT_FIX=36;
 ctx.scale(scale,scale);

 if(attack>0 && A.playerFull && A.sword){
   // 공격 중에도 평상시와 완전히 동일한 통짜 캐릭터를 같은 좌표·크기로 그린다.
   // 따라서 공격 시작/종료 시 몸 크기나 발 위치가 절대 바뀌지 않는다.
   drawContain(A.playerFull,-92,-250+FOOT_FIX+bob,184,250,1,false,0,.5,1);

   // 캐릭터 본체에는 어떤 scale/translate도 추가하지 않고, 추가 칼만 독립적으로 회전한다.
   const p=Math.max(0,Math.min(1,attack));
   const eased=1-Math.pow(1-p,3);
   // 시작 프레임은 통짜 캐릭터의 기존 칼 손잡이와 겹치도록 맞춘다.
   // 이후 칼만 손잡이를 축으로 아래쪽으로 휘두른다.
   // v4.7: 칼을 캐릭터 대비 약 30% 키우고, 시작부터 오른쪽 위를 향하도록 각도를 눕힌다.
   // v5.0.3: 검 손잡이를 축으로 +45도에서 -45도까지 한 번에 휘두른다.
   // v5.0.4: 기존 방향을 반대로 뒤집어 위에서 아래로 내려벤다.
   const swordStart=-Math.PI/4;
   const swordEnd=Math.PI/4;
   const swordRot=swordStart+(swordEnd-swordStart)*eased;
   ctx.save();
   ctx.translate(40,-117+FOOT_FIX+bob);
   ctx.rotate(swordRot);
   drawContain(A.sword,-18,-137,70,158,.98,false,0,.27,.88);
   ctx.restore();

   ctx.save();
   ctx.globalAlpha=.18*Math.sin(p*Math.PI);
   ctx.strokeStyle='#fff0a0';
   ctx.lineWidth=7;
   ctx.lineCap='round';
   ctx.beginPath();
   ctx.arc(40,-117+FOOT_FIX,103,-1.08+swordRot,.12+swordRot);
   ctx.stroke();
   ctx.restore();
 }else{
   // 평상시에는 깨짐 없는 통짜 캐릭터를 사용
   drawContain(A.playerFull,-92,-250+FOOT_FIX+bob,184,250,1,false,0,.5,1);
 }

 if(guard&&A.shield){
   ctx.save();
   const pulse=1+.035*Math.sin(performance.now()/75);
   ctx.translate(48,-118+FOOT_FIX);
   ctx.scale(pulse,pulse);
   drawContain(A.shield,-48,-48,96,96,.98,false,0,.5,.5);
   ctx.globalAlpha=.24;
   ctx.strokeStyle='#9fe9ff';
   ctx.lineWidth=5;
   ctx.beginPath();
   ctx.arc(0,0,55,0,Math.PI*2);
   ctx.stroke();
   ctx.restore();
 }
 ctx.restore();
}

function startBossEncounter(){
 if(boss.phase!=='wait')return;
 boss.active=1;boss.phase='intro';boss.intro=0;boss.x=cam+W+210;
 foes.forEach(f=>f.alive=0);missiles=[];
 pl.vx=0;pl.atk=0;pl.sh=0;
}
const CAPSULE_TYPES=[
 {label:'부정청탁',icon:'!',liquid:'#9a46cf',glow:'#e6a8ff'},
 {label:'금품수수',icon:'₩',liquid:'#b77832',glow:'#ffd28a'},
 {label:'불공정',icon:'★',liquid:'#b83e59',glow:'#ff9aaa'}
];
function fireBossMissiles(){
 boss.shotNo++;
 const shots=boss.hp<=boss.max/2?3:2;
 for(let i=0;i<shots;i++){
  const spread=(i-(shots-1)/2)*.13;
  const tx=pl.x,ty=pl.y+55;
  let dx=tx-boss.x,dy=ty-(boss.y+105),ang=Math.atan2(dy,dx)+spread;
  const type=CAPSULE_TYPES[(boss.shotNo+i)%CAPSULE_TYPES.length];
  missiles.push({x:boss.x-90,y:boss.y+92,w:76,h:38,vx:Math.cos(ang)*390,vy:Math.sin(ang)*390,alive:1,trail:[],rot:ang,spin:(Math.random()-.5)*3,type});
 }
 boss.flash=.25;boss.charging=0;
}
function addToxicBreak(x,y,type,big=false){
 const n=big?18:12;
 for(let i=0;i<n;i++){
  const a=Math.random()*Math.PI*2,sp=(big?210:155)*(.55+Math.random()*.7);
  toxicBits.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-45,t:.30+Math.random()*.18,max:.48,r:2+Math.random()*4,kind:i%3===0?'glass':'toxin',color:type?.liquid||'#9a46cf'});
 }
 addBurst(x,y,big);
}
function drawCapsule(m){
 const t=m.type||CAPSULE_TYPES[0];
 ctx.save();ctx.translate(m.x+m.w/2,m.y+m.h/2);ctx.rotate(m.rot||0);
 ctx.shadowColor=t.glow;ctx.shadowBlur=14;
 rr(-m.w/2,-m.h/2,m.w,m.h,m.h/2,'#171824','#ffb1d8');
 ctx.save();ctx.beginPath();ctx.roundRect(-m.w/2+5,-m.h/2+5,m.w-10,m.h-10,(m.h-10)/2);ctx.clip();
 ctx.fillStyle=t.liquid;ctx.fillRect(-m.w/2+5,0,m.w-10,m.h/2-5);
 ctx.fillStyle='rgba(255,255,255,.16)';ctx.fillRect(-m.w/2+10,-m.h/2+8,m.w*.45,5);
 ctx.restore();
 ctx.shadowBlur=0;ctx.strokeStyle='rgba(255,255,255,.75)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,-m.h/2+4);ctx.lineTo(0,m.h/2-4);ctx.stroke();
 txt(t.icon,-9,6,16,'#fff');ctx.restore();
 txt(t.label,m.x+m.w/2,m.y+m.h+19,13,'#ffe8f2');
}
function addBurst(x,y,big=false){bursts.push({x,y,t:big?.55:.32,max:big?.55:.32,big});}
function addHitSpark(x,y,big=false){
 const count=big?10:6;
 for(let i=0;i<count;i++){
  const a=(-Math.PI*.85)+(Math.random()*Math.PI*1.7);
  const sp=(big?190:140)*(0.65+Math.random()*.55);
  hitSparks.push({x,y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-35,t:big?.18:.14,max:big?.18:.14,r:(big?4.2:3)*(0.7+Math.random()*.6)});
 }
}
function update(dt){
 T+=dt;
 if(S==='title'){if(P['enter']||P[' ']||P['z'])scene('intro')}
 else if(S==='intro'){if(T>7.5||P['enter']||P[' ']||P['z'])scene('game')}
 else if(S==='game')game(dt);
 else if((S==='gameover'||S==='end')&&(P['enter']||P[' ']||P['z']))scene('title');

 if(S==='clear'){
  for(const k in K)K[k]=0;
  for(const k in P)delete P[k];
  return;
 }

 for(const k in P)delete P[k];
}
function game(dt){
 if(quizActive)return;
 let d=(K['arrowleft']||K['a']?-1:0)+(K['arrowright']||K['d']?1:0);
 const guarding=pl.sh>0;
 const speed=guarding?130:(pl.atk>0?180:270);
 pl.vx+=(d*speed-pl.vx)*Math.min(1,dt*12);if(d)pl.dir=d;
 if((P[' ']||P['arrowup']||P['w'])&&pl.on){pl.vy=-550;pl.on=0}
 pl.atkCd=Math.max(0,pl.atkCd-dt);pl.shCd=Math.max(0,pl.shCd-dt);
 if((P['z']||P['k'])&&pl.atk<=0&&pl.atkCd<=0&&!guarding){pl.atk=.28;pl.atkCd=.31;pl.atkSeq++}
 if((P['x']||P['l'])&&pl.sh<=0&&pl.shCd<=0&&pl.atk<=0){pl.sh=.55;pl.shCd=.95}
 pl.atk=Math.max(0,pl.atk-dt);pl.sh=Math.max(0,pl.sh-dt);pl.inv=Math.max(0,pl.inv-dt);
 pl.vy+=1200*dt;pl.x=cl(pl.x+pl.vx*dt,40,WORLD-80);pl.y+=pl.vy*dt;
 if(pl.y+pl.h>=G){pl.y=G-pl.h;pl.vy=0;pl.on=1}else pl.on=0;

 const body={x:pl.x-28,y:pl.y+5,w:56,h:115};
 const atkBox={x:pl.dir>0?pl.x+20:pl.x-105,y:pl.y+5,w:90,h:100};

 foes.forEach(f=>{
  if(!f.alive)return;
  f.x+=f.dir*40*dt;
  if(Math.abs(f.x-[620,1080,1540,2200,2780][foes.indexOf(f)])>90)f.dir*=-1;
  const fb={x:f.x-f.w/2,y:f.y,w:f.w,h:f.h};
  if(pl.atk>.05&&hit(atkBox,fb)&&f.lastHit!==pl.atkSeq){f.lastHit=pl.atkSeq;f.hp--;addHitSpark(pl.dir>0?f.x-f.w*.22:f.x+f.w*.22,f.y+f.h*.48,false);if(f.hp<=0){
    f.alive=0;
    openSlimeQuiz(f.quizType,f.label);
   }}
  if(hit(body,fb)&&pl.inv<=0){
    if(pl.sh>0){f.dir*=-1;f.x+=pl.dir*24}else{life--;pl.inv=1.0;pl.vy=-260;if(life<=0)S='gameover'}
  }
 });

 if(pl.x>3100&&boss.phase==='wait')startBossEncounter();
 if(boss.active&&boss.alive){
  if(boss.phase==='intro'){
   boss.intro+=dt;pl.vx=0;
   const target=cam+W-225;
   boss.x+=(target-boss.x)*Math.min(1,dt*2.6);
   if(boss.intro>=1.55){boss.phase='fight';boss.attackTimer=3.0;boss.postShotDelay=0;boss.countdown=0;boss.charging=0}
  }else if(boss.phase==='fight'){
   boss.flash=Math.max(0,boss.flash-dt);

   // 발사 직후 1.5초간 휴식한 뒤 다시 3→2→1 카운트다운
   if(boss.postShotDelay>0){
    boss.postShotDelay=Math.max(0,boss.postShotDelay-dt);
    boss.countdown=0;
    boss.charging=0;
    if(boss.postShotDelay<=0)boss.attackTimer=3.0;
   }else{
    boss.attackTimer-=dt;
    boss.charging=boss.attackTimer<=.38&&boss.attackTimer>0?1-boss.attackTimer/.38:0;
    boss.countdown=boss.attackTimer>0?Math.max(1,Math.ceil(boss.attackTimer)):0;

    if(boss.attackTimer<=0){
     fireBossMissiles();
     boss.postShotDelay=1.5;
     boss.attackTimer=0;
     boss.countdown=0;
     boss.charging=0;
    }
   }
   const desired=pl.x+500;
   boss.x+=(desired-boss.x)*Math.min(1,dt*(boss.hp<=boss.max/2?1.2:.75));
   boss.x=cl(boss.x,3200,WORLD-130);
  }
  const bb={x:boss.x-boss.w/2,y:boss.y,w:boss.w,h:boss.h};
  if(boss.phase==='fight'&&pl.atk>.05&&hit(atkBox,bb)&&boss.lastHit!==pl.atkSeq){
   boss.lastHit=pl.atkSeq;boss.hp--;addHitSpark(pl.dir>0?boss.x-boss.w*.32:boss.x+boss.w*.32,boss.y+boss.h*.52,true);
   if(boss.hp<=0){
    boss.alive=0;
    rec=Math.min(100,rec+25);
    addBurst(boss.x,boss.y+100,true);
    S='clear';
    T=0;
    setResultOverlay(true);
    // 공격 직후 남아 있는 모든 입력을 통째로 제거한다.
    for(const k in K)K[k]=0;
    for(const k in P)delete P[k];
    document.querySelectorAll('.touch-btn').forEach(b=>b.classList.remove('pressed'));
    mobilePointers.clear();
   }
  }
  if(boss.phase==='fight'&&hit(body,bb)&&pl.inv<=0&&pl.sh<=0){life--;pl.inv=1;pl.vx=-pl.dir*300;if(life<=0)S='gameover'}
 }

 missiles.forEach(m=>{
  if(!m.alive)return;m.trail.push({x:m.x,y:m.y});if(m.trail.length>11)m.trail.shift();m.x+=m.vx*dt;m.y+=m.vy*dt;m.rot+=m.spin*dt;
  if(pl.atk>.05&&hit(atkBox,m)){m.alive=0;addToxicBreak(m.x+m.w/2,m.y+m.h/2,m.type,false);return}
  if(hit(body,m)){if(pl.sh>0){m.alive=0;addToxicBreak(m.x+m.w/2,m.y+m.h/2,m.type,true)}else if(pl.inv<=0){m.alive=0;life--;pl.inv=1;addToxicBreak(m.x+m.w/2,m.y+m.h/2,m.type,false);if(life<=0)S='gameover'}}
  if(m.x<cam-100||m.x>cam+W+200||m.y<0||m.y>H)m.alive=0;
 });
 missiles=missiles.filter(m=>m.alive);
 bursts.forEach(b=>b.t-=dt);bursts=bursts.filter(b=>b.t>0);
 hitSparks.forEach(s=>{s.t-=dt;s.x+=s.vx*dt;s.y+=s.vy*dt;s.vy+=760*dt});hitSparks=hitSparks.filter(s=>s.t>0);
 toxicBits.forEach(q=>{q.t-=dt;q.x+=q.vx*dt;q.y+=q.vy*dt;q.vy+=620*dt;q.vx*=.985});toxicBits=toxicBits.filter(q=>q.t>0);
 cam=cl(cam+(pl.x-365-cam)*dt*5,0,WORLD-W);
 rec=cl(rec,0,100);
}

function title(){
 drawCover(A.title,0,0,W,H);
 ctx.fillStyle='rgba(0,20,42,.72)';ctx.fillRect(0,H-42,W,42);
 txt(IS_TOUCH?'화면을 터치하거나 ⚔ 버튼을 눌러 시작':'게임 시작 버튼 클릭 · ENTER 또는 SPACE',W/2,H-16,17);txt('Full Quiz v8.6',1238,30,15,'#d7efff','right');
}
function intro(){
 bg(Math.min(30,T*4));ground();
 if(T<2.7){
  txt('부패는 우리의 미래를 어둡게 만듭니다.',W/2,620,32);
 }else if(T<5.3){
  playerRig(470,535,1.0,0,1,false);
  txt('하지만 청렴의 힘은 어둠을 걷어냅니다.',W/2,620,32);
 }else{
  playerRig(330+(T-5.3)*120,540,0.92,Math.max(0,Math.sin(T*4)),0,false);
  txt('부패를 물리치고 대한민국의 미래를 밝혀주세요!',W/2,620,28);
 }
 txt(IS_TOUCH?'⚔ 버튼으로 건너뛰기':'ENTER로 건너뛰기',1230,690,14,'#d7efff','right');
}
function drawGame(){
 bg(rec);ground();
 ctx.save();ctx.translate(-cam,0);
 foes.forEach(f=>{if(f.alive){
  // v5.0.3: 슬라임 이미지의 하단을 캐릭터 발과 동일한 플랫폼 기준선에 고정한다.
  const sw=f.w*1.18, sh=(f.h+12)*1.18;
  // 슬라임 원본의 빈 배경 여백을 제거하고 실제 몸체 바닥을 캐릭터 발 높이에 고정한다.
  drawCropped(A.slime,.14,.20,.73,.60,f.x-sw/2,CHARACTER_FOOT_Y-sh,sw,sh,1,f.dir<0);
  // 슬라임 종류가 확실히 보이도록 머리 위에 이름표를 표시한다.
  const badgeW=Math.max(118, f.label.length*18+30);
  rr(f.x-badgeW/2, CHARACTER_FOOT_Y-sh-42, badgeW, 30, 15, 'rgba(4,26,48,.90)', '#ffe46b');
  txt(f.label,f.x,CHARACTER_FOOT_Y-sh-20,16,'#ffe46b');
 }});
 if(boss.alive&&boss.active){
  ctx.save();
  if(boss.flash>0){ctx.globalAlpha=.65+.35*Math.sin(performance.now()/35)}
  drawContain(A.boss,boss.x-boss.w/2,boss.y,boss.w,boss.h,1,false,0,.5,1);
  ctx.restore();
  rr(boss.x-90,boss.y-42,180,32,16,'rgba(40,4,55,.92)','#ffb3ff');
  txt('부패마왕',boss.x,boss.y-19,18,'#ffb3ff');
  if(boss.phase==='fight'&&boss.charging>0){
   const pulse=22+boss.charging*24+Math.sin(performance.now()/45)*4;
   ctx.save();ctx.globalAlpha=.45+.45*boss.charging;ctx.shadowColor='#d95cff';ctx.shadowBlur=25;
   ctx.fillStyle='#6f167f';ctx.beginPath();ctx.arc(boss.x-82,boss.y+105,pulse,0,Math.PI*2);ctx.fill();
   ctx.strokeStyle='#ffb3ff';ctx.lineWidth=4;ctx.beginPath();ctx.arc(boss.x-82,boss.y+105,pulse+8,0,Math.PI*2);ctx.stroke();ctx.restore();
  }
 }
 missiles.forEach(m=>{
  const col=m.type?.liquid||'#9b30a7';
  m.trail.forEach((q,i)=>{const a=(i+1)/m.trail.length*.24;ctx.globalAlpha=a;ctx.fillStyle=col;ctx.beginPath();ctx.arc(q.x+m.w*.3,q.y+m.h*.5,5+i*.35,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(12,6,18,.55)';ctx.beginPath();ctx.arc(q.x+m.w*.17,q.y+m.h*.42,3+i*.25,0,Math.PI*2);ctx.fill()});ctx.globalAlpha=1;
  drawCapsule(m);
 });
 toxicBits.forEach(q=>{const a=Math.max(0,q.t/q.max);ctx.globalAlpha=a;if(q.kind==='glass'){ctx.strokeStyle='#e8f7ff';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(q.x-4,q.y-2);ctx.lineTo(q.x+4,q.y+2);ctx.stroke()}else{ctx.fillStyle=q.color;ctx.beginPath();ctx.arc(q.x,q.y,q.r*(.5+a),0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1});
 bursts.forEach(b=>{
  const p=1-b.t/b.max,r=(b.big?115:58)*p;
  ctx.globalAlpha=1-p;ctx.strokeStyle=b.big?'#9ffcff':'#ffe671';ctx.lineWidth=b.big?12:7;ctx.beginPath();ctx.arc(b.x,b.y,r,0,Math.PI*2);ctx.stroke();ctx.globalAlpha=1;
 });
 hitSparks.forEach(s=>{
  const a=Math.max(0,s.t/s.max);
  ctx.globalAlpha=a;
  ctx.fillStyle=a>.48?'#ffffff':'#ffd84d';
  ctx.beginPath();ctx.arc(s.x,s.y,s.r*a+.8,0,Math.PI*2);ctx.fill();
  ctx.strokeStyle='#fff2a3';ctx.lineWidth=2*a;ctx.beginPath();ctx.moveTo(s.x,s.y);ctx.lineTo(s.x-s.vx*.025,s.y-s.vy*.025);ctx.stroke();
  ctx.globalAlpha=1;
 });
 ctx.restore();

 if(pl.inv<=0||Math.floor(pl.inv*10)%2===0){
  const attack=pl.atk>0?1-pl.atk/.28:0;
  playerRig(pl.x-cam,pl.y+pl.h,0.88,attack,pl.sh>0,pl.dir<0);
 }
 rr(22,20,310,94,20,'rgba(3,20,38,.82)','rgba(150,220,255,.65)');
 txt('♥'.repeat(Math.max(0,life)),45,54,28,'#ff7188','left');
 txt('🌱 청렴도  '+Math.round(rec)+'%',45,88,18,'#d9f7ff','left');
 rr(360,58,540,24,12,'#071b2d','#a7d8ef');
 ctx.fillStyle=rec<25?'#ff596d':rec<50?'#ff9f43':rec<75?'#ffd84d':'#50dba2';
 ctx.fillRect(364,62,532*rec/100,16);
 txt(IS_TOUCH?'◀ ▶ 이동 · ⚔ 공격 · 🛡 방패':'← → 이동 · 점프 SPACE · 공격 Z · 방패 X',1035,40,15,'#d9f7ff');

 if(boss.active&&boss.alive){
  rr(370,105,540,54,18,'rgba(35,5,28,.9)','#ff87ac');
  txt('BOSS  부패 에너지 괴물',640,101,20,'#ffd4df');
  rr(392,124,496,22,11,'#210818','#ffffff55');
  ctx.fillStyle=boss.hp<=boss.max*.2?'#ff263f':'#ef4774';ctx.fillRect(397,129,486*boss.hp/boss.max,12);
  if(boss.phase==='intro'){
   ctx.fillStyle='rgba(20,0,12,.68)';ctx.fillRect(0,0,W,H);
   txt('⚠  BOSS 등장  ⚠',W/2,245,52,'#ff5a7e');
   rr(W/2-340,285,680,150,24,'rgba(3,18,35,.92)','#79dbff');
   txt('독극물 캡슐은  X  방패로 막으세요!',W/2,335,27,'#ffffff');
   txt('방패는 잠깐만 유지됩니다.',W/2,378,22,'#ccefff');
   txt('3 · 2 · 1 카운트다운 끝에 맞춰 X를 누르세요',W/2,414,20,'#ffe59a');
  }else if(boss.countdown>0){
   txt('⚠ LOCK ON · 카운트다운 끝에 X!',W/2,220,23,'#ffd6e1');
   txt(String(boss.countdown),W/2,305,70,'#ff4a75');
   ctx.strokeStyle='rgba(255,58,104,.65)';ctx.lineWidth=6;ctx.beginPath();ctx.arc(pl.x-cam,pl.y+55,52+8*Math.sin(performance.now()/90),0,Math.PI*2);ctx.stroke();
  }
 }
}
function panel(title,sub,showContinueHint=true){
 ctx.fillStyle='rgba(2,10,22,.78)';ctx.fillRect(0,0,W,H);
 txt(title,W/2,300,62,title.includes('CLEAR')?'#8dffcb':'#fff');
 txt(sub,W/2,370,26,'#d7efff');
 if(showContinueHint){
  rr(W/2-150,430,300,65,18,'#187bc2','#8ee8ff');
  txt(IS_TOUCH?'화면 터치 또는 ⚔':'클릭 또는 ENTER',W/2,471,21);
 }
}
function render(){
 ctx.clearRect(0,0,W,H);
 if(S==='loading')return;
 if(S==='title')title();
 else if(S==='intro')intro();
 else if(S==='game'){drawGame();if(pl.inv>0&&Math.floor(pl.inv*10)%2===0){ctx.fillStyle='rgba(255,50,80,.12)';ctx.fillRect(0,0,W,H)}}
 else if(S==='clear'){
  bg(rec);ground();playerRig(350,540,1.05,0,1,false);
  panel(rec>=100?'청렴도 회복 완료!!':'🏆 CLEAR!','최종 청렴도 '+Math.round(rec)+'%',false);
 }
 else if(S==='gameover'){bg(rec);ground();panel('정화 실패','다시 도전해 부패를 몰아내세요.')}
 else if(S==='end'){bg(100);panel('청렴 에너지 히어로','청렴은 대한민국을 밝히는 힘입니다.')}
}
function loop(t){const dt=Math.min(.033,(t-last)/1000||0);last=t;update(dt);render();requestAnimationFrame(loop)}
requestAnimationFrame(loop);
