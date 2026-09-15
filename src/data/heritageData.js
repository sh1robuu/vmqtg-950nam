// Dữ liệu di sản Văn Miếu - Quốc Tử Giám: Hành trình 950 năm lưu giữ tri thức

export const HERITAGE_TIMELINE = [
  {
    year: '1070',
    era: 'Triều Lý (Lý Thánh Tông)',
    title: 'Khởi dựng Văn Miếu',
    description: 'Mùa thu tháng 8 năm Canh Tuất (1070), Vua Lý Thánh Tông cho lập Văn Miếu, đắp tượng Khổng Tử, Chu Công và Tứ Phối, vẽ tranh 72 vị hiền triết, bốn mùa cúng tế để tôn vinh đạo học.',
    significance: 'Đặt nền móng Nho học và giáo dục chính thống đầu tiên của Đại Việt.',
    image: '/images/khu-nhap-dao.jpg',
    tag: 'Khởi nguồn di sản'
  },
  {
    year: '1076',
    era: 'Triều Lý (Lý Nhân Tông)',
    title: 'Thành lập Quốc Tử Giám',
    description: 'Vua Lý Nhân Tông cho lập Quốc Tử Giám bên cạnh Văn Miếu, chọn các văn thần và con cháu hoàng gia vào học, đánh dấu sự ra đời của trường đại học quốc gia đầu tiên tại Việt Nam.',
    significance: 'Chuyển dịch giáo dục từ nội bộ cung đình sang đào tạo hiền tài cho giang sơn.',
    image: '/images/khu-thai-hoc.jpg',
    tag: 'Đại học đầu tiên'
  },
  {
    year: '1484',
    era: 'Triều Hậu Lê (Lê Thánh Tông)',
    title: 'Khởi dựng Bia Tiến Sĩ đầu tiên',
    description: 'Vua Lê Thánh Tông ban sắc lệnh dựng bia đá khắc tên các bậc đỗ đại khoa từ khoa thi Nhâm Tuất (1442). Danh sĩ Thân Nhân Trung soạn bài văn bia bất hủ với chân lý: "Hiền tài là nguyên khí của quốc gia".',
    significance: 'Khắc ghi công đức hiền tài vào đá để lưu danh muôn thuở, răn dạy hậu thế.',
    image: '/images/vuon-bia.jpg',
    tag: 'Bia đá lưu danh'
  },
  {
    year: '1805',
    era: 'Triều Nguyễn (Gia Long)',
    title: 'Xây dựng Khuê Văn Các',
    description: 'Tổng trấn Bắc thành Nguyễn Văn Thành chủ trì hưng công xây dựng Khuê Văn Các với lầu vuông hai tầng tám mái, cửa tròn sao Khuê đón ánh ban mai soi bóng lung linh xuống Giếng Thiên Quang.',
    significance: 'Biểu tượng tinh hoa đỉnh cao của nền văn hiến và thủ đô Thăng Long - Hà Nội.',
    image: '/images/khu-thanh-dat.jpg',
    tag: 'Biểu tượng Thăng Long'
  },
  {
    year: '2011',
    era: 'Thời đại mới (UNESCO)',
    title: 'Di sản Tư liệu Thế giới',
    description: '82 tấm bia Tiến sĩ triều Lê - Mạc (1442 - 1779) tại Văn Miếu - Quốc Tử Giám chính thức được UNESCO công nhận là Di sản tư liệu thế giới thuộc Chương trình Ký ức Thế giới Toàn cầu (Memory of the World).',
    significance: 'Giá trị độc bản, tính xác thực và tầm ảnh hưởng giáo dục nhân văn toàn cầu.',
    image: '/images/turtle-stele.jpg',
    tag: 'Vinh danh Toàn cầu'
  },
  {
    year: '2026',
    era: 'Kỷ nguyên Số hóa',
    title: 'Kỷ niệm 950 Năm Văn Miếu',
    description: 'Cột mốc tròn 950 năm hành trình thắp sáng ngọn lửa hiếu học (1070 - 2026). Di sản bước vào kỷ nguyên bảo tàng số tương tác, mang hồn cốt ngàn xưa đến với thế hệ trẻ qua công nghệ thực tế ảo và AI.',
    significance: 'Công nghệ không thay thế di sản, mà thổi hồn vào di sản trường tồn.',
    image: '/images/hero.jpg',
    tag: 'Đại lễ 950 năm'
  }
];

export const HERITAGE_ZONES = [
  {
    id: 'zone-1',
    number: '01',
    name: 'Khu Nhập Đạo',
    subname: 'Cổng Tam Quan & Con đường Nhập Đạo',
    coords: { x: 50, y: 88 },
    image: '/images/khu-nhap-dao.jpg',
    summary: 'Bước qua cánh cổng thời gian dẫn lối người quân tử bước vào con đường học vấn thanh cao.',
    details: {
      architecture: 'Khởi đầu từ cổng Văn Miếu Môn 3 cửa cổ kính, hai bên có câu đối chữ Hán tôn vinh Nho học. Con đường lát gạch Bát Tràng cổ kính rợp bóng cây cổ thụ dẫn vào Cổng Đại Trung (Đại Trung Môn).',
      symbolism: 'Hai bên trục thần đạo là hai hồ nước đối xứng: Hồ Kim Giám và Hồ Thiên Quang thu nhỏ, tượng trưng cho tâm trí thanh tịnh, gột rửa bụi trần trước khi tiếp cận thánh đường tri thức.',
      highlights: ['Cổng Văn Miếu Môn & Bia Hạ Mã', 'Cổng Đại Trung (Đại Trung Môn)', 'Cửa Thành Đức & Cửa Đạt Tài'],
      quote: 'Nhập Đạo - Muốn thành nhân trước tiên phải học đạo lý, kính thầy yêu bạn.'
    }
  },
  {
    id: 'zone-2',
    number: '02',
    name: 'Khu Thành Đạt',
    subname: 'Khuê Văn Các & Ánh sao văn học',
    coords: { x: 50, y: 70 },
    image: '/images/khu-thanh-dat.jpg',
    summary: 'Nơi ngự trị của Khuê Văn Các - gác sao Khuê tỏa sáng, biểu tượng đỉnh cao của văn hiến Hà Nội.',
    details: {
      architecture: 'Công trình kiến trúc độc đáo gồm tầng dưới là 4 cột đá vuông bốn góc, tầng trên bằng gỗ sơn son thếp vàng với 4 ô cửa sổ tròn có then hoa tỏa ra bốn phía như ánh sáng ngời ngợi của sao Khuê (chủ về văn học).',
      symbolism: 'Cửa tròn sao Khuê hướng xuống Giếng Thiên Quang hình vuông bên dưới tạo nên triết lý vũ trụ quan Á Đông sâu sắc: "Trời tròn - Đất vuông", sự hòa quyện giữa tinh hoa vũ trụ và tri thức trần gian.',
      highlights: ['Khuê Văn Các hưng công năm 1805', 'Cửa Bí Văn & Cửa Súc Văn', 'Gác chuông bát giác thanh thoát'],
      quote: 'Khuê tinh quang minh lãng triệu - Ánh sáng sao Khuê chiếu rọi non sông.'
    }
  },
  {
    id: 'zone-3',
    number: '03',
    name: 'Vườn Bia Tiến Sĩ',
    subname: 'Giếng Thiên Quang & 82 Bia Rùa Đá',
    coords: { x: 50, y: 52 },
    image: '/images/vuon-bia.jpg',
    summary: 'Trái tim di sản nơi lưu danh 1.307 vị đại khoa đỗ đạt qua 82 kỳ thi từ năm 1442 đến 1779.',
    details: {
      architecture: 'Trung tâm là Giếng Thiên Quang (Thiên Quang Tỉnh - Giếng ánh sáng bầu trời) hình vuông tĩnh lặng đón mây trời. Hai bên tả hữu là hai dãy nhà bia che chở cho 82 tấm bia Tiến sĩ ngự trên lưng rùa đá.',
      symbolism: 'Rùa đá đội bia tượng trưng cho sự trường cửu, bền bỉ và trọng trách ngàn đời gánh vác trí tuệ nước nhà. Mặt nước giếng như chiếc gương soi sáng phẩm hạnh kẻ sĩ.',
      highlights: ['82 bia Tiến sĩ - Di sản Tư liệu Thế giới UNESCO', 'Giếng Thiên Quang hội tụ linh khí', 'Bài văn bia bất hủ của Thân Nhân Trung'],
      quote: 'Hiền tài là nguyên khí của quốc gia, nguyên khí thịnh thì thế nước mạnh, rồi lên cao.'
    }
  },
  {
    id: 'zone-4',
    number: '04',
    name: 'Khu Đại Thành',
    subname: 'Điện Đại Thành & Không gian Tế lễ',
    coords: { x: 50, y: 32 },
    image: '/images/khu-dai-thanh.jpg',
    summary: 'Khu vực thiêng liêng nhất của Văn Miếu, nơi thờ phụng Đức Khổng Tử và Tứ Phối hiền triết.',
    details: {
      architecture: 'Bao gồm Cổng Đại Thành Môn dẫn vào sân tế lễ rộng lớn. Tòa Đại Bái và Hậu Cung nối tiếp theo hình chữ Công (工), cột gỗ lim chạm khắc long vân sơn son thếp vàng lộng lẫy, hương trầm nghi ngút.',
      symbolism: 'Đại Thành mang ý nghĩa "Tập đại thành" - nơi quy tụ và hoàn thiện mọi phẩm chất đạo đức, tri thức cao quý nhất của loài người.',
      highlights: ['Bàn thờ Đức Khổng Tử và Tứ Phối (Nhan Hồi, Tăng Tử, Tử Tư, Mạnh Tử)', 'Tòa Đại Bái trang nghiêm', 'Bộ chuông đồng Bích Ung và khánh đá cổ'],
      quote: 'Vạn thế sư biểu - Người thầy mẫu mực muôn đời.'
    }
  },
  {
    id: 'zone-5',
    number: '05',
    name: 'Khu Thái Học',
    subname: 'Quốc Tử Giám & Đền thờ Chu Văn An',
    coords: { x: 50, y: 12 },
    image: '/images/khu-thai-hoc.jpg',
    summary: 'Trường Đại học Quốc gia đầu tiên của Đại Việt, nơi rèn đức luyện tài cho bao thế hệ rường cột.',
    details: {
      architecture: 'Quần thể Nhà Tiền Đường và Hậu Đường hai tầng mái ngói cong uy nghi. Tầng 1 tôn vinh lịch sử trường Quốc Tử Giám và tượng đài Đại tư đồ Chu Văn An; tầng 2 thờ các bậc danh vương có công khởi lập: Lý Thánh Tông, Lý Nhân Tông và Lê Thánh Tông.',
      symbolism: 'Biểu hiện lòng tri ân sâu sắc truyền thống "Tôn sư trọng đạo" và ý chí chấn hưng giáo dục nước nhà.',
      highlights: ['Đền thờ Danh sư Chu Văn An - Người thầy của muôn đời', 'Không gian phục dựng thư phòng và thi cử xưa', 'Trống đồng, khánh đá và tư liệu mộc bản quý'],
      quote: 'Học quý ở chỗ thực hành, làm quan quý ở chỗ giữ trọn tiết tháo.'
    }
  }
];

export const DOCTOR_STELES_DATA = {
  quote: 'Hiền tài là nguyên khí của quốc gia, nguyên khí thịnh thì thế nước mạnh, rồi lên cao, nguyên khí suy thì thế nước yếu, rồi xuống thấp.',
  author: 'Thân Nhân Trung (1419 – 1499)',
  authorTitle: 'Đông các Đại học sĩ triều Hậu Lê',
  symbolismTurtle: {
    title: 'Hình tượng Rùa đá đội bia',
    subtitle: 'Biểu tượng của sự trường tồn và gánh vác trí tuệ',
    content: 'Trong văn hóa Việt, rùa là linh vật duy nhất có thật trong Tứ linh (Long - Lân - Quy - Phụng). Rùa sống lâu năm, sức chịu đựng phi thường. Hình tượng rùa cõng tấm bia nặng trên lưng tượng trưng cho lòng kiên trinh, trường cửu và trọng trách của kẻ sĩ gánh vác tương lai đất nước qua muôn ngàn sóng gió.',
    keyPoints: [
      'Gắn kết Đất - Nước - Trời trong văn hóa tâm linh Đại Việt',
      'Đầu rùa vươn cao kiêu hãnh tượng trưng cho khí phách hiền tài',
      'Mai rùa phẳng vững chãi làm bệ đỡ cho tri thức ngàn đời'
    ]
  },
  eras: [
    {
      id: 'le-so',
      period: 'Thời Lê Sơ (1442 – 1527)',
      styleName: 'Mộc mạc - Hùng tráng - Khởi nguồn',
      description: 'Bia thời Lê Sơ có dáng vuông vức, khỏe khoắn. Hình tượng rùa được tạc với mai nhẵn, đầu ngẩng cao, các móng chân sắc nhọn bám chặt mặt đất. Hoa văn trán bia chạm hình rồng mây với khí thế cuồn cuộn của thời đại hoàng kim độc lập.',
      features: ['Rùa tạc khỏe khoắn, mắt to tròn lộ rõ vẻ uy nghiêm', 'Hoa văn rồng yên ngựa, vân mây cuộn dũng mãnh', 'Chữ khắc chân phương, đường nét sâu đậm trường tồn']
    },
    {
      id: 'mac',
      period: 'Thời Nhà Mạc (1527 – 1592)',
      styleName: 'Mềm mại - Hoa cúc - Dân dã',
      description: 'Dù chiến tranh tao loạn, nhà Mạc vẫn duy trì các khoa thi đều đặn. Điêu khắc bia thời này xuất hiện nhiều họa tiết hoa lá tự nhiên như hoa cúc cánh xoắn, hoa sen, mây lửa mềm mại, phản ánh tâm thức nghệ thuật dân gian gần gũi.',
      features: ['Rùa có kích thước vừa phải, đường nét bo tròn mềm mại', 'Họa tiết hoa cúc dây, mây tản cách điệu thanh nhã', 'Sự hòa nhập giữa cung đình và nghệ thuật dân gian']
    },
    {
      id: 'le-trung-hung',
      period: 'Thời Lê Trung Hưng (1593 – 1789)',
      styleName: 'Tinh xảo - Đa dạng - Rồng ổ hoa mỹ',
      description: 'Giai đoạn chiếm số lượng bia lớn nhất. Kỹ thuật chạm khắc đạt tới đỉnh cao tinh xảo với hoa văn rồng ổ (rồng mẹ bồng rồng con), mặt trời tỏa tia sáng, dải lụa và hoa lá cầu kỳ thể hiện sự phồn vinh của nghệ thuật điêu khắc đá cổ.',
      features: ['Bia có trán chạm rồng chầu mặt trời, viền bia chạm dải hoa cúc tinh xảo', 'Rùa chạm khắc tỉ mỉ từng lớp vảy mai rùa lục giác', 'Nhiều bài văn bia bàn sâu về đạo trị quốc và phép khảo hạch']
    }
  ]
};

export const PODCAST_EPISODES = [
  {
    id: 1,
    episode: 'Tập 01',
    title: 'Chuyện 82 bia Tiến sĩ: Nơi đá biết nói',
    duration: '18:45',
    tag: 'Di sản & Ký ức',
    description: 'Hành trình giải mã những dòng văn bia cổ trên 82 tấm bia Tiến sĩ UNESCO. Tại sao những con rùa đá lại chở nặng tri thức suốt hơn nửa thiên niên kỷ mà không hề khuất phục trước phong ba bão táp?',
    narrator: 'Nguyễn Quí Phong & Khách mời Di sản',
    waveform: [35, 60, 45, 90, 80, 50, 75, 40, 95, 65, 30, 85, 55, 70, 45, 90, 60, 40, 80, 55, 65, 40, 75, 50]
  },
  {
    id: 2,
    episode: 'Tập 02',
    title: 'Khuê Văn Các: Mật mã kiến trúc Trời tròn Đất vuông',
    duration: '15:20',
    tag: 'Kiến trúc & Biểu tượng',
    description: 'Khám phá bí ẩn đằng sau ô cửa tròn sao Khuê hướng xuống giếng vuông Thiên Quang. Sự kết hợp tài tình giữa vũ trụ quan Đông phương và tư tưởng khai sáng tri thức Thăng Long nghìn năm văn hiến.',
    narrator: 'Nguyễn Nam Khánh',
    waveform: [40, 70, 55, 80, 95, 60, 45, 85, 70, 50, 90, 65, 40, 80, 60, 75, 55, 90, 45, 65, 85, 50, 70, 60]
  },
  {
    id: 3,
    episode: 'Tập 03',
    title: 'Tư tưởng hiếu học: Từ lều chõng khoa cử đến Gen Z số hóa',
    duration: '21:10',
    tag: 'Giao thoa Thời đại',
    description: 'Đối thoại giữa thế hệ học sinh THPT FPT hôm nay với tinh thần hiếu học của cha ông thời xưa. Làm thế nào để công nghệ số thổi bùng ngọn lửa "Hiền tài là nguyên khí quốc gia" trong kỷ nguyên trí tuệ nhân tạo?',
    narrator: 'Nhóm Tác giả Song Sát Sâu Sắc',
    waveform: [50, 65, 80, 55, 90, 75, 60, 85, 40, 95, 70, 55, 85, 60, 75, 90, 50, 70, 85, 65, 45, 80, 95, 55]
  }
];

export const VIDEO_PROJECT_DATA = {
  title: 'Vẻ Đẹp Văn Miếu: Tiếng Vọng Ngàn Năm',
  subTitle: 'Phim ngắn thuyết minh & khám phá di sản của Nhóm học sinh THPT FPT Hà Nội',
  videoSrc: '/video/ve-dep-van-mieu.mp4',
  thumbnail: '/images/video-thumbnail.jpg',
  team: {
    groupName: 'Song Sát Sâu Sắc',
    school: 'THPT FPT Hà Nội',
    members: [
      { name: 'Nguyễn Quí Phong', role: 'Trưởng nhóm - Đạo diễn, Quay phim & Hậu kỳ video' },
      { name: 'Nguyễn Nam Khánh', role: 'Phụ trách Sáng tạo - Kịch bản & Thông điệp di sản' }
    ]
  },
  quotes: [
    'Từng viên gạch, từng phiến đá nơi đây không chỉ là quá khứ, mà chính là nguồn cội của tương lai.',
    'Chúng em muốn dùng lăng kính của công nghệ hiện đại để đưa Văn Miếu đến gần hơn với trái tim người trẻ.'
  ]
};
