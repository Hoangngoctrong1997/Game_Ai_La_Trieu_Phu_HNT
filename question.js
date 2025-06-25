const questions = [
  // MỨC 1 – Rất dễ
  [
    { question: "Thủ đô của Việt Nam là gì?", options: ["A: Hồ Chí Minh","B: Đà Nẵng","C: Hà Nội","D: Huế"], answer: 2 },
    { question: "Mặt Trăng là vệ tinh của hành tinh nào?", options: ["A: Trái Đất","B: Sao Hỏa","C: Sao Thủy","D: Sao Kim"], answer: 0 },
    { question: "Màu quốc kỳ Việt Nam là gì?", options: ["A: Đỏ – Vàng","B: Xanh – Trắng","C: Đỏ – Trắng","D: Xanh – Vàng"], answer: 0 },
    { question: "2 + 2 bằng mấy?", options: ["A: 3","B: 4","C: 5","D: 6"], answer: 1 },
    { question: "Ngày Quốc khánh Việt Nam là ngày nào?", options: ["A: 1/1","B: 2/9","C: 30/4","D: 3/2"], answer: 1 },
    { question: "Mùa đông ở Việt Nam kéo dài mấy tháng?", options: ["A: 3","B: 6","C: 2","D: 4"], answer: 0 },
    { question: "Hình nào có 4 cạnh?", options: ["A: Tam giác","B: Hình vuông","C: Hình tròn","D: Kim tự tháp"], answer: 1 },
    { question: "Con gì kêu ì ... ạch?", options: ["A: Gà","B: Chó","C: Vịt","D: Cá"], answer: 2 },
    { question: "Biển lớn nhất thế giới?", options: ["A: Đại Tây Dương","B: Thái Bình Dương","C: Ấn Độ Dương","D: Bắc Băng Dương"], answer: 1 },
    { question: "Trái Tim nằm bên nào cơ thể người?", options: ["A: Trái","B: Phải","C: Giữa","D: Dưới"], answer: 0 }
  ],

  // MỨC 2 – Dễ
  [
    { question: "Nguyên tố hóa học 'O' là gì?", options: ["A: Sắt","B: Vàng","C: Oxy","D: Đồng"], answer: 2 },
    { question: "Tổng góc tam giác là bao nhiêu?", options: ["A: 90°","B: 180°","C: 270°","D: 360°"], answer: 1 },
    { question: "Châu lục có dân số đông nhất?", options: ["A: Africa","B: Nam Mỹ","C: Châu Á","D: Châu Âu"], answer: 2 },
    { question: "Năm 2020 là năm gì theo âm lịch?", options: ["A: Tý","B: Sửu","C: Thìn","D: Tuất"], answer: 0 },
    { question: "Sao lớn nhất hệ Mặt Trời?", options: ["A: Trái Đất","B: Sao Thủy","C: Sao Thổ","D: Mặt Trời"], answer: 3 },
    { question: "Tác giả 'Dế Mèn phiêu lưu ký'?", options: ["A: Nam Cao","B: Nguyễn Nhật Ánh","C: Tô Hoài","D: Xuân Diệu"], answer: 2 },
    { question: "Nước nào hiện có dân số lớn nhất?", options: ["A: Ấn Độ","B: Trung Quốc","C: Mỹ","D: Indonesia"], answer: 0 },
    { question: "Số nguyên tố đầu tiên là?", options: ["A: 1","B: 2","C: 3","D: 5"], answer: 1 },
    { question: "Nước Đức có thủ đô là?", options: ["A: Paris","B: Berlin","C: Madrid","D: Rome"], answer: 1 },
    { question: "Độ cao bình thường của mực nước biển tính từ 0 đến ... m", options: ["A: 8848","B: 0","C: -454","D: 0"], answer: 1 }
  ],

  // MỨC 3 – Trung bình thấp
  [
    { question: "Cách mạng tháng Tám năm nào?", options: ["A: 1940","B: 1945","C: 1954","D: 1975"], answer: 1 },
    { question: "Người phát minh ra bóng đèn?", options: ["A: Edison","B: Newton","C: Tesla","D: Galileo"], answer: 0 },
    { question: "Ai là vị vua sáng lập triều Nguyễn?", options: ["A: Minh Mạng","B: Gia Long","C: Khải Định","D: Bảo Đại"], answer: 1 },
    { question: "Tốc độ ánh sáng ~?", options: ["A: 300 000 km/s","B: 150 000 km/s","C: 1 000 km/s","D: 300 km/s"], answer: 0 },
    { question: "Thành phố nào là thủ phủ miền Nam VN trước 1975?", options: ["A: Huế","B: Sài Gòn","C: Đà Nẵng","D: Hải Phòng"], answer: 1 },
    { question: "Nhân vật hoạt hình 'Thỏ Bugs' thuộc hãng nào?", options: ["A: Disney","B: Warner Bros.","C: Pixar","D: DreamWorks"], answer: 1 },
    { question: "Tử vi 12 con giáp con Chó đứng thứ mấy?", options: ["A: 11","B: 12","C: 1","D: 2"], answer: 0 },
    { question: "Công thức tính diện tích hình vuông?", options: ["A: a²","B: 2a","C: a×b","D: πr²"], answer: 0 },
    { question: "Tác phẩm 'Chiếc lá cuối cùng' ai viết?", options: ["A: O. Henry","B: Mark Twain","C: Hemingway","D: Dickens"], answer: 0 },
    { question: "Năm nào đánh dấu Hiến pháp đầu tiên VN độc lập?", options: ["A: 1946","B: 1954","C: 1975","D: 1980"], answer: 0 }
  ],

  // MỨC 4 – Trung bình
  [
    { question: "Số nguyên tố nhỏ nhất >100?", options: ["A: 101","B: 103","C: 107","D: 109"], answer: 0 },
    { question: "Hợp chất nào chứa ion SO₄²⁻?", options: ["A: NaCl","B: H₂SO₄","C: CH₄","D: CaCO₃"], answer: 1 },
    { question: "Ai sáng lập Microsoft?", options: ["A: Steve Jobs","B: Bill Gates","C: Larry Page","D: Mark Zuckerberg"], answer: 1 },
    { question: "Biển Đông nằm ở châu nào?", options: ["A: Châu Á","B: Châu Âu","C: Châu Phi","D: Châu Mỹ"], answer: 0 },
    { question: "Quốc kỳ Nhật Bản màu gì?", options: ["A: Đỏ–trắng","B: Xanh–trắng","C: Vàng–đỏ","D: Xanh–đỏ"], answer: 0 },
    { question: "Điện tích electron là âm/ dương?", options: ["A: Dương","B: Âm","C: Trung tính","D: Có thể cả hai"], answer: 1 },
    { question: "Ngân hàng lớn nhất thế giới theo vốn hóa?", options: ["A: JPMorgan","B: ICBC","C: Goldman Sachs","D: HSBC"], answer: 1 },
    { question: "Tác giả Mỹ nổi tiếng các truyện ngắn hài hước?", options: ["A: O. Henry","B: Poe","C: Hemingway","D: Fitzgerald"], answer: 0 },
    { question: "Công thức tính tốc độ v = ...?", options: ["A: s/t","B: t/s","C: s×t","D: s²/t"], answer: 0 },
    { question: "Năm bắt đầu Chiến tranh thế giới thứ II?", options: ["A: 1914","B: 1939","C: 1945","D: 1950"], answer: 1 }
  ],

  // MỨC 5 – Trung bình cao
  [
    { question: "Thuật toán Dijkstra dùng để làm gì?", options: ["A: Nén dữ liệu","B: Tìm đường đi ngắn nhất","C: Mã hóa","D: Phân tích số liệu"], answer: 1 },
    { question: "Nguyên lý bất định Heisenberg nói gì?", options: ["A: Không thể biết vị trí & động lượng hạt cùng lúc","B: Không thể vượt tốc độ ánh sáng","C: Vật thể chịu hấp dẫn","D: Electron quay tròn quanh hạt"], answer: 0 },
    { question: "Trong lập trình, HTTP là viết tắt của gì?", options: ["A: HyperText Transfer Protocol","B: HighText Transfer Protocol","C: Hyperlink Text","D: None"], answer: 0 },
    { question: "Sinh nhật Einstein rơi vào tháng mấy?", options: ["A: Tháng 3","B: Tháng 4","C: Tháng 5","D: Tháng 6"], answer: 1 },
    { question: "Thành phần chính của LPG?", options: ["A: Methane","B: Propane & Butane","C: Ethanol","D: Benzin"], answer: 1 },
    { question: "Đơn vị đo tần số là gì?", options: ["A: Watt","B: Pascal","C: Hertz","D: Volt"], answer: 2 },
    { question: "Ai là tác giả 'The Theory of Relativity'?", options: ["A: Newton","B: Einstein","C: Galileo","D: Hawking"], answer: 1 },
    { question: "Mạng xã hội ra đời năm 2004 là?", options: ["A: Twitter","B: Facebook","C: Instagram","D: Snapchat"], answer: 1 },
    { question: "Đơn vị đo cường độ dòng điện?", options: ["A: Ohm","B: Ampere","C: Volt","D: Tesla"], answer: 1 },
    { question: "Công thức định luật Ohm là?", options: ["A: V = I × R","B: I = V + R","C: R = V × I","D: V = R / I"], answer: 0 }
  ],

  // MỨC 6 – Khó nhẹ
  [
    { question: "Thuyết tương đối rộng đề cập đến gì?", options: ["A: Tia âm thanh","B: Trường hấp dẫn & cong không-thời gian","C: Chuyển động lượng tử","D: Phân tử"], answer: 1 },
    { question: "Đơn vị ánh sáng đi trong 1 năm gọi là?", options: ["A: Parsec","B: Năm ánh sáng","C: Kilomét","D: Mặt Trăng"], answer: 1 },
    { question: "Nguyên tố số 26?", options: ["A: Sắt (Fe)","B: Vàng (Au)","C: Đồng (Cu)","D: Bạc (Ag)"], answer: 0 },
    { question: "Thuật toán sắp xếp nào trung bình O(n log n)?", options: ["A: Bubble sort","B: Quick sort","C: Insertion sort","D: Selection sort"], answer: 1 },
    { question: "Mạng điện thoại 5G tốc độ cao nhất ~?", options: ["A: 1 Gbps","B: 10 Gbps","C: 100 Gbps","D: 100 Mbps"], answer: 0 },
    { question: "Quốc kỳ Thái Lan có bao nhiêu màu?", options: ["A: 3","B: 4","C: 5","D: 6"], answer: 2 },
    { question: "Ai phát minh ra thuyền hơi nước?", options: ["A: James Watt","B: Robert Fulton","C: Nikola Tesla","D: Alexander Bell"], answer: 1 },
    { question: "Đường chân trời của Trái Đất dài ~?", options: ["A: 40.075 km","B: 20.000 km","C: 10.000 km","D: 1.000 km"], answer: 0 },
    { question: "Các nguyên tố trong pin kiềm?", options: ["A: Li-Ion","B: Alkaline","C: Nickel-Cadmium","D: Lithium"], answer: 1 },
    { question: "Phép cộng ma trận NxN có tính gì?", options: ["A: Không giao hoán","B: Giao hoán","C: Không kết hợp","D: Không tồn tại"], answer: 1 }
  ],

  // MỨC 7 – Khó
  [
    { question: "Eigenvalue trong đại số tuyến tính là gì?", options: ["A: Vector","B: Số vô hướng λ","C: Ma trận ngược","D: Đạo hàm"], answer: 1 },
    { question: "Hiệu ứng Doppler liên quan đến điều gì?", options: ["A: Ánh sáng","B: Tần số thay đổi do chuyển động","C: Lực hấp dẫn","D: Sóng điện từ"], answer: 1 },
    { question: "Chuỗi DNA gồm bao nhiêu bazơ chính?", options: ["A: 2","B: 3","C: 4","D: 5"], answer: 2 },
    { question: "Trong lập trình, Big O của tìm kiếm tuyến tính?", options: ["A: O(1)","B: O(log n)","C: O(n)","D: O(n²)"], answer: 2 },
    { question: "Công thức Maxwell nào sau đây?", options: ["A: ∇·E = ρ/ε₀","B: ∇×v = 0","C: F = ma","D: E = mc²"], answer: 0 },
    { question: "Chất nào làm lạnh trong tủ lạnh?", options: ["A: Ammonia","B: CO₂","C: H₂O","D: O₂"], answer: 0 },
    { question: "Đơn vị đo kelvin bắt đầu từ ... độ C?", options: ["A: -273,15°C","B: 0°C","C: -100°C","D: -200°C"], answer: 0 },
    { question: "HTML là ngôn ngữ gì?", options: ["A: lập trình","B: đánh dấu siêu văn bản","C: cơ sở dữ liệu","D: hệ điều hành"], answer: 1 },
    { question: "Theo cơ học lượng tử, hạt có thể ...?", options: ["A: Có vị trí chính xác và động lượng","B: Không xác định đồng thời","C: Luôn có năng lượng bất biến","D: Luôn laze"], answer: 1 },
    { question: "Firewalls hoạt động ở lớp nào trong OSI?", options: ["A: Lớp ứng dụng","B: Lớp mạng","C: Lớp vật lý","D: Lớp liên kết dữ liệu"], answer: 1 }
  ],
    // MỨC 8 – Rất khó (chuyên sâu)
  [
    {question:"Định lý Fermat nhỏ phát biểu gì?", options:["A: a^p≡a(mod p) với p là nguyên tố","B: Không tồn tại nghiệm nguyên cho a^n+b^n=c^n khi n>2","C: Mọi số chẵn l > 2 có thể phân tích thành tổng hai số nguyên tố","D: Số π là đại số"], answer:0},
    {question:"Lực yếu quyết định quá trình nào trong vật lý hạt?", options:["A: Phản ứng hạt nhân nhanh","B: Phân rã beta","C: Lực hấp dẫn","D: Lực điện"], answer:1},
    {question:"Trong C++: từ khóa virtual dùng để gì?", options:["A: Khởi tạo biến ảo","B: Đa hình động","C: Con trỏ thông minh","D: Xử lý ngoại lệ"], answer:1},
    {question:"Giao thoa vân sáng trên màng mỏng dựa vào hiện tượng gì?", options:["A: Nhiễu xạ","B: Giao thoa","C: Tán xạ","D: Phản xạ toàn phần"], answer:1},
    {question:"Tính chất nhóm Abel là gì?", options:["A: Có đơn vị","B: Mọi hai phần tử giao hoán","C: Có phần tử nghịch đảo","D: Phép toán bất biến"], answer:1},
    {question:"Theo định luật Kirchhoff thứ nhất là?", options:["A: Tổng dòng vào node = 0","B: Tổng áp qua mạch = 0","C: Công suất tiêu thụ = công suất phát","D: I = U/R"], answer:0},
    {question:"Trong SQL, để loại bỏ bản ghi trùng dùng từ khóa?", options:["A: UNIQUE","B: DISTINCT","C: REMOVE","D: DROP"], answer:1},
    {question:"Áp suất thủy tĩnh tỷ lệ với?", options:["A: Chiều cao cột chất lỏng","B: Diện tích vùng chứa","C: Hình dạng bình chứa","D: Nhiệt độ chất lỏng"], answer:0},
    {question:"Theo CPT theorem, bất biến kết hợp C,P,T?", options:["A: Luôn đúng","B: Đôi khi sai","C: Chỉ đúng với phản vật chất","D: Không áp dụng"], answer:0},
    {question:"Trong điện toán phân tán, CAP theorem nói rằng 3 yếu tố nào không thể thỏa đồng thời?", options:["A: Consistency, Availability, Partition tolerance","B: CPU, Access, Power","C: Cache, Availability, Performance","D: Code, Architecture, Process"], answer:0}
  ],
[
    {question:"Định lý Galois liên quan đến gì?", options:["A: Lý thuyết số","B: Nhóm và nghiệm đa thức","C: Đại số tuyến tính","D: Giải tích"], answer:1},
    {question:"Quantum entanglement tạo ra hiện tượng gì?", options:["A: Cộng hưởng sóng","B: Phân rã hạt","C: Liên kết trạng thái lượng tử","D: Bức xạ"], answer:2},
    {question:"Chi phí biên (marginal cost) trong kinh tế là gì?", options:["A: Chi phí trung bình","B: Chi phí thêm khi tăng sản xuất 1 đơn vị","C: Tổng chi phí","D: Chi phí đầu tư"], answer:1},
    {question:"Mô hình Black-Scholes dùng để định giá gì?", options:["A: Tiền tệ kỹ thuật số","B: Quyền chọn tài chính","C: Hàng hóa tương lai","D: Trái phiếu chính phủ"], answer:1},
    {question:"Trong lập trình FP, currying là gì?", options:["A: Chuyển hàm thành chuỗi","B: Chia nhỏ đa thức","C: Biến hàm n tham số thành chuỗi hàm đơn tham số","D: Ghép biến toàn cục"], answer:2},
    {question:"Theo thuyết Big Bang, vũ trụ bắt đầu bao nhiêu tỉ năm trước?", options:["A: ~13.8","B: ~4.5","C: ~10","D: ~20"], answer:0},
    {question:"Trong thiên văn, redshift biểu thị gì?", options:["A: Dịch chuyển về phía xanh","B: Giãn nở dương của vũ trụ","C: Tăng nhiệt độ sao","D: Tổng khối lượng thiên hà"], answer:1},
    {question:"Trường hợp nào của NP-complete chưa biết có giải đa thức?", options:["A: Tất cả NP","B: Turing machine","C: P vs NP","D: Sorting algorithms"], answer:2},
    {question:"Hằng số Planck h bằng bao nhiêu x10⁻³⁴ J·s?", options:["A: 6.63","B: 9.11","C: 1.60","D: 3.14"], answer:0},
    {question:"Định luật thứ hai của nhiệt động lực học phát biểu gì?", options:["A: Năng lượng được bảo toàn","B: Entropy hệ kín luôn tăng","C: Áp suất trong bình kín luôn ổn định","D: Nghiền chặt hạt nhân"], answer:1}
  ],
  // MỨC 10 – Siêu khó
  [
    {question:"Lý thuyết đo lường Lebesgue hữu ích trong?", options:["A: Giải tích thường","B: Giải tích hàm","C: Đại số","D: Kỹ thuật số"], answer:1},
    {question:"Tính chất non-abelian group nghĩa là?", options:["A: Có phần tử đơn vị","B: Phép toán không giao hoán","C: Có phần tử nghịch đảo","D: Có tính kết hợp"], answer:1},
    {question:"Trong cơ học lượng tử, spin hạt fermion là số gì?", options:["A: Nguyên","B: Nửa nguyên","C: Thập phân","D: Pi"], answer:1},
    {question:"Trong mạng nơ-ron sâu, vanishing gradient là gì?", options:["A: Mất tín hiệu đầu vào","B: Gradients rất nhỏ và không hội tụ","C: Mạng bị quá tải","D: Mlearning offline"], answer:1},
    {question:"Theo Thuyết trường lượng tử, boson gauge truyền lực nào?", options:["A: Electron","B: Photon","C: Proton","D: Neutron"], answer:1},
    {question:"Đạo hàm Zeta Riemann tại s thể hiện gì?", options:["A: Hàm phân phối xác suất","B: Số nguyên tố phân bố","C: Tích phân bội","D: Phân rã sóng hài"], answer:1},
    {question:"Định lý Stone–Weierstrass liên quan đến?", options:["A: Nội suy đa thức","B: Xấp xỉ hàm liên tục bằng đa thức/trig","C: Vật lý cơ bản","D: Đại số tuyến tính"], answer:1},
    {question:"Thuật ngữ 'quark' trong vật lý hạt do ai đặt?", options:["A: Einstein","B: Gell-Mann","C: Feynman","D: Dirac"], answer:1},
    {question:"Trong mã hóa RSA, khóa công khai dựa trên tính toán gì?", options:["A: Lũy thừa modulo","B: Phân tích số nguyên tố","C: Phân phối chuẩn","D: Hàm băm"], answer:1},
    {question:"Theo lý thuyết hỗn loạn, điều kiện Lyapunov >0 chỉ ra gì?", options:["A: Hệ ổn định","B: Hỗn loạn nhạy ban đầu","C: Chu kỳ cố định","D: Mạng lưới tuyến tính"], answer:1}
  ],
    // MỨC 11 – Chuyên sâu liên ngành
  [
    {question:"Phân tích SWOT trong quản trị là gì?", options:["A: Strengths, Weaknesses, Opportunities, Threats","B: Strategy, Work, Operations, Time","C: Sales, Wages, Output, Taxes","D: None"], answer:0},
    {question:"Trong y học, PCR dùng để gì?", options:["A: Phát hiện virus","B: X-quang","C: Siêu âm","D: MRI"], answer:0},
    {question:"GDP PPP nghĩa là gì?", options:["A: Giá trị sản xuất quốc nội","B: GDP điều chỉnh sức mua","C: Tỷ giá cố định","D: Công nghiệp sản xuất"], answer:1},
    {question:"Theo Kuhn, paradigms shift là gì?", options:["A: Thay đổi mô hình khoa học","B: Thay máy chủ","C: Cập nhật phần mềm","D: Thay đại học"], answer:0},
    {question:"Trong tâm lý học, Maslow đề xuất tháp nhu cầu thứ mấy là tự thể hiện?", options:["A: Thứ 1","B: Thứ 3","C: Thứ 5","D: Thứ 4"], answer:2},
    {question:"Blockchain dùng cấu trúc gì để ghi transaction?", options:["A: Bảng","B: Chuỗi khối liên kết","C: Cây nhị phân","D: Graph có hướng"], answer:1},
    {question:"Khi nghiên cứu AI, reinforcement learning dựa vào gì?", options:["A: Dữ liệu gán nhãn","B: Thưởng – phạt (reward-punishment)","C: Tính toán gradient","D: Phân loại"], answer:1},
    {question:"Trong lập trình, garbage collection để làm gì?", options:["A: Thu hồi bộ nhớ không còn sử dụng","B: Dọn file rác","C: Xóa log","D: Debug chương trình"], answer:0},
    {question:"Thuật ngữ arbitrage trong tài chính nghĩa là gì?", options:["A: Đầu tư dài hạn","B: Mua bán khác sàn kiếm lời không rủi ro","C: Đánh bạc tín hiệu","D: Phân tích kỹ thuật"], answer:1},
    {question:"Trong phân tích dữ liệu, p‑value <0.05 có nghĩa gì?", options:["A: Sai số >5%","B: Kết quả có ý nghĩa thống kê ở 95%","C: Dữ liệu có lỗi","D: Sai ở mức 0.05%"], answer:1}
  ],

  // MỨC 12 – Rất chuyên sâu
  [
    {question:"Thevenin theorem áp dụng trong điện như thế nào?", options:["A: Mở mạch","B: Mô hình điện bất biến tương đương","C: Chống nhiễu","D: Đo lường điện áp"], answer:1},
    {question:"Eigenfunction và eigenvalue giữ vai trò gì trong phương trình sóng?", options:["A: Không có","B: Xác định mode dao động riêng","C: Xác định áp suất","D: Xác định tốc độ"], answer:1},
    {question:"Trong hóa phân tích, HPLC viết tắt của gì?", options:["A: High Performance Liquid Chromatography","B: High Pressure Liquid Chromatography","C: High Pressure Line Chromatography","D: None"], answer:0},
    {question:"Trong lập trình, mutex dùng để làm gì?", options:["A: Quản lý luồng","B: Đồng bộ truy cập tài nguyên chia sẻ","C: Lưu log","D: Gỡ lỗi"], answer:1},
    {question:"Thuật toán Fourier sử dụng để làm gì?", options:["A: Lọc tín hiệu","B: Tổng hợp dữ liệu","C: Phân tích đa thức","D: Mã hóa"], answer:0},
    {question:"Giá trị EIC của electron trong hydro là gì?", options:["A: −13.6 eV","B: 0 eV","C: +13.6 eV","D: −1 eV"], answer:0},
    {question:"Trong vật lý plasma, Debye length biểu thị gì?", options:["A: Khoảng cách tương tác điện","B: Khối lượng ion","C: Tốc độ âm","D: Áp suất plasma"], answer:0},
    {question:"Trong tối ưu hóa, Lagrange multiplier dùng để làm gì?", options:["A: Xây dựng hàm mục tiêu","B: Tìm đặc trưng cực trị có ràng buộc","C: Xác định biến quyết định","D: Phân tích vi phân"], answer:1},
    {question:"Hàm đặc trưng đặc trong xác suất?", options:["A: Fourier transform của phân phối","B: Distribution function","C: CDF","D: PDF"], answer:0},
    {question:"Trong ngành luật, Habeas corpus bảo vệ gì?", options:["A: Quyền tự do tôn giáo","B: Quyền không bị giam giữ tùy tiện","C: Quyền sở hữu tài sản","D: Quyền tự khiến trước tòa"], answer:1}
  ],
  // MỨC 13 – Siêu chuyên sâu
  [
    {question:"Theo General Relativity, metric Schwarzschild mô tả gì?", options:["A: Không gian phẳng","B: Trường hấp dẫn quanh lỗ đen không quay","C: Dao động sóng","D: Quỹ đạo hành tinh"], answer:1},
    {question:"Trong lý thuyết số, giả thuyết Riemann nói về gì?", options:["A: Vị trí của nghiệm phi-tự nhiên của zeta","B: Phân phối số nguyên tố","C: Hàm phân phối xác suất","D: Tích phân bội"], answer:0},
    {question:"Entropy Shannon đo lường gì?", options:["A: Sự hỗn loạn","B: Mức độ bất định trong thông tin","C: Công suất mã hóa","D: Độ dài mã"], answer:1},
    {question:"Trong gen học, CRISPR/Cas9 là gì?", options:["A: Công cụ chỉnh sửa DNA","B: Virus nhân tạo","C: Protein tín hiệu","D: Enzyme phân giải protein"], answer:0},
    {question:"Phương trình Navier–Stokes mô tả điều gì?", options:["A: Chuyển động chất lỏng","B: Sóng ánh sáng","C: Máy học","D: Dao động lượng tử"], answer:0},
    {question:"Principle of superposition áp dụng trong?", options:["A: Cơ học lượng tử","B: Cơ học Newton","C: Hóa học","D: Tâm lý học"], answer:0},
    {question:"Zero-knowledge proof sử dụng gì?", options:["A: Chứng minh mà không tiết lộ bí mật","B: Mã hóa đối xứng","C: Tăng bandwidth","D: Xác thực password"], answer:0},
    {question:"Butterfly effect nằm trong lĩnh vực nào?", options:["A: Vật lý chất rắn","B: Hỗn loạn động lực học","C: Toán tổ hợp","D: Sinh học phân tử"], answer:1},
    {question:"Quantum field có dạng gì trong toán học?", options:["A: Ma trận","B: Operator-valued distribution","C: Số thực","D: Số phức"], answer:1},
    {question:"Trong NLP, Transformer architecture dựa trên gì?", options:["A: Recurrent units","B: Attention mechanism","C: Convolution","D: Decision tree"], answer:1}
  ],
  //Mức 14
[
    {question:"Định lý Atiyah–Singer index liên quan đến gì?", options:["A: Đại số","B: Sự kết hợp giữa giải tích và topology","C: Phân tích số","D: Xác suất"], answer:1},
    {question:"Trong mật mã học lượng tử, BB84 protocol dùng gì?", options:["A: Knot theory","B: Phiên mã hóa đối xứng","C: Key distribution bằng photon đơn","D: Blockchain"], answer:2},
    {question:"Phương trình Yang–Mills chưa chứng minh điều gì?", options:["A: Tồn tại khối lượng tín hiệu không-zero","B: Không tồn tại","C: Không có nghiệm","D: Không xác định"], answer:0},
  ],
 // MỨC 15 – Đỉnh cao nghiên cứu
  [
    {question:"Langlands program kết nối lĩnh vực nào?", options:["A: Xác suất với số học","B: Đại số với hình học đa chiều","C: Số học, hình học đại số và lý thuyết biểu diễn","D: Phân tích tần số"], answer:2},
    {question:"MTV vs FLT: giả thuyết Birch–Swinnerton‑Dyer nói về gì?", options:["A: Tích phân","B: Số nguyên tố","C: Tính chất Mordell–Weil rank của elliptic curve","D: Prime distribution"], answer:2},
    {question:"Trong lý thuyết M‑theory, brane p‑chiều là gì?", options:["A: Hạt cơ bản","B: Vật thể p‑chiều trong không‑thời gian 11 chiều","C: Sóng hấp dẫn","D: Lỗ đen lượng tử"], answer:1},
    {question:"Khái niệm categorification đề cập đến gì?", options:["A: Chuyển từ số sang category trong toán","B: Phân loại vật lý hạt","C: Mã hóa dữ liệu","D: Định lý cơ bản đại số"], answer:0},
    {question:"Trong đại số cao cấp, infinity-categories dùng để gì?", options:["A: Xây dựng X‑chart","B: Nghiên cứu morphism giữa morphism","C: Phân tích vector","D: Lọc chuỗi số"], answer:1},
    {question:"Khái niệm ‘motives’ trong hình học đại số là gì?", options:["A: Một loại đa thức","B: Giải thích cho sự tương đồng giữa cohomology theories","C: Hằng số toán học","D: Một dạng hàm đặc trưng"], answer:1},
    {question:"Lang–Rapoport conjecture đề cập đến gì?", options:["A: Phân phối số nguyên tố","B: Mô phỏng CAD","C: Cohomology của Shimura varieties","D: Bargaining theory"], answer:2},
    {question:"Khái niệm ∞‑topos generalizes concept gì?", options:["A: Phân tích số","B: Tập hợp và topological space","C: Đa thức bậc hai","D: Lý thuyết thuật toán"], answer:1},
    {question:"GM duality trong lý thuyết trường lượng tử đẳng cấp M là gì?", options:["A: Thịnh hành","B: Duality giữa p‑brane và q‑brane","C: Mâu thuẫn","D: Một constant vật lý"], answer:1},
    {question:"Đường cong elliptic E defined over Q có rank bằng gì?", options:["A: Luôn = 0","B: Có thể bất kỳ","C: Không thể đoán","D: = Mordell–Weil group dim"], answer:3}
  ]
];

