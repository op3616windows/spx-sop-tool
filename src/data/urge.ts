export const urgeData = [
  {
    title: "Yêu cầu hối hoàn",
    tag: "hoihoan",
    main: true,
    image: [""],
    description: "CS cần kiểm tra xem case đến từ đâu?",
    macro: "",
    note: "",
    mail: "",
    key: "Case đến từ đâu?",
    children: [
      {
        title: "SPE",
        tag: "hoihoan-a1",
      },
      {
        title: "Case Portal",
        tag: "hoihoan-a2", //todo
      },
    ],
  },
  {
    title: "Case SPE",
    tag: "hoihoan-a1",
    Main: false,
    image: [""],
    description:
      "Đối với case SPE thì mặc định sẽ thỏa điều kiện hối giao. Tuy nhiên, CS cần kiểm tra thêm điều kiện đơn đã đến LMHub chưa",
    macro: "",
    note: "",
    mail: "",
    key: "Đơn hàng đã đến LMHub chưa?",
    children: [
      {
        title: "Đã đến LMHub",
        tag: "hoihoan-a1-b1",
      },
      {
        title: "Chưa đến LMHub",
        tag: "hoihoan-a1-b2",
      },
    ],
  },
  {
    title: "Đơn hàng đã đến LMHub",
    tag: "hoihoan-a1-b1",
    main: false,
    image: [""],
    description:
      "CS có thể phản hồi thông tin theo macro + note remark chuyển Hub như sau:",
    macro:
      "SPE Express kiểm tra thấy đơn hàng đã đến bưu cục tại quận/huyện của bạn và đang được sẵn sàng để hoàn hàng. Tuy nhiên, hiểu rằng bạn cũng đang cần hoàn gấp nên mình xin phép chuyển thông tin tới Bộ phận liên quan để họ kiểm tra và hoàn đơn hàng về cho bạn trong thời gian sớm nhất có thể ạ",
    note: "HoTen_SDT_KH yêu cầu hối hoàn hàng, nhờ team hỗ trợ giúp CS. Thanks",
    mail: `Thân chào bạn {name},

Cảm ơn bạn đã liên hệ với SPX Express, mình là Gia Khánh xin được phép tiếp tục hỗ trợ cho bạn về vấn đề yêu cầu hối hoàn đơn hàng {XXX},

Qua kiểm tra thông tin, SPE Express nhận thấy đơn hàng này đã đến bưu cục tại quận/huyện của bạn và đang được sẵn sàng để hoàn hàng. Tuy nhiên, hiểu rằng bạn cũng đang cần hoàn gấp nên mình xin phép chuyển thông tin tới Bộ phận liên quan để họ kiểm tra và hoàn đơn hàng về cho bạn trong thời gian sớm nhất có thể ạ.

Bạn có thể tham khảo thêm một số câu hỏi thường gặp tại đây.

Trân trong,
    `,
    key: "",
  },
  {
    title: "Đơn hàng chưa đến LMHub",
    tag: "hoihoan-a1-b2",
    main: false,
    image: [""],
    description: "CS phản hồi theo macro + solve case",
    macro:
      "SPX Express kiểm tra thấy đơn hàng vẫn đang trên đường vận chuyển về đến quận/huyện của bạn, SPX sẽ cố gắng xử lý đơn hàng này trong thời gian sớm nhất có thể để bạn có thể sớm nhận được đơn hàng này ạ. Mong bạn thông cảm chờ thêm giúp SPX Express được không ạ?",
    note: "",
    mail: `
Xin chào bạn ABCD,

Cám ơn bạn đã tin dùng dịch vụ của SPX Express, mình là XXX xin phép được hỗ trợ về trường hợp hối hoàn đơn hàng ABC.

Qua kiểm tra thông tin SPX Express nhận thấy đơn hàng này đang trên hành trình hoàn về cho bạn. SPX Express sẽ nhanh chóng xử lý đơn hàng và hoàn về cho bạn trong thời gian sớm nhất có thể. Bạn yên tâm chờ thêm giúp SPX Express nhé!

Đồng thời SPX Express cũng sẽ cố gắng cải thiện hơn về quy trình hoàn đơn trong tương lai. Một số câu hỏi thường gặp thì bạn có thể tham khảo thêm tại đây.

Trong trường hợp vấn đề của bạn chưa được xử lý xong, bạn đừng ngại phản hồi qua email để SPX Express tiếp tục hỗ trợ bạn chu đáo hơn
hoặc bạn có thể tham khảo thêm tại Trung tâm trợ giúp.

Thân mến,
`,
    key: "",
  },

  {
    title: "Case Portal",
    tag: "hoihoan-a2",
    Main: false,
    image: [""],
    description: `Đối với case Portal thì CS cần kiểm tra các điều kiện sau:
- Đơn đã đến LMHub chưa,
- Đã quá 7-10 NLV (Không bao gồm CN, ngày lễ) kể từ lúc có trạng thái chuyển hoàn chưa?`,
    macro: "",
    note: "",
    mail: "",
    key: "Đơn hàng đã đủ cả 2 điều kiện chưa?",
    children: [
      {
        title: "Đủ 2 điều kiện",
        tag: "hoihoan-a1-b1",
      },
      {
        title: "Không đủ 1 trong 2 điều kiện",
        tag: "hoihoan-a1-b2",
      },
    ],
  },

  // hối lấy
  {
    title: "Yêu cầu hối lấy",
    tag: "hoilay",
    main: true,
    image: ["/images/hoi-2.png"],
    description: `- Hối lấy (chưa pickup done): phản hồi "SPX tiếp nhận & chuyển thông tin đến bộ phận yêu cầu lấy hàng gấp. Thời gian xử lý dự kiến 1-2 ngày làm việc”

- Trường hợp khách hàng yêu cầu thay đổi drop off thành pick up: Seller chọn hình thức drop off nhưng không tìm được điểm gửi hàng hoặc muốn SPX hỗ trợ pick up. Agent hỗ trợ như sau:
  + Bước 1: Agent có thể vào mục thông tin đơn hàng, tại "Return Info" lấy thông tin Hub
  + Bước 2: tạo ticket nhờ Hub hỗ trợ pick up (ticket category Hỗ trợ - Hối lấy)
  + Bước 3: Hub phản hồi
  + Bước 4: Trả lời khách hàng`,
    macro: "",
    note: "",
    mail: "",
    key: "",
  },
  // hối giao
  {
    title: "Yêu cầu hối giao",
    tag: "hoigiao",
    main: true,
    image: ["/images/hoi-giao.png", "/images/hoi-2.png"],
    description: "Đang cập nhật...",
    macro: "",
    note: "",
    mail: "",
    key: "",
  },
];
