export const otherData = [
  {
    title: "Yêu cầu thay đổi thông tin đơn hàng",
    description: `CS cần kiểm tra lại xem đơn hàng có đủ các điều kiện như sau hay không:
- Đổi địa chỉ/SDT giao: đơn hàng chưa chuyển hoàn.
- Đổi địa chỉ/SDT lấy: đơn hàng chưa pick up done.
- Địa chỉ mới phải cùng quận/huyện và cùng Hub giao/lấy hàng.`,
    key: "Đơn hàng đủ điều kiện hỗ trợ hay không?",
    main: true,
    image: ["/images/change-order-info.png", "/images/change-order-info.png"],
    macro: "",
    note: "",
    mail: "",
    tag: "coi",
    children: [
      {
        title: "Đủ điều kiện",
        tag: "coi-a1",
      },
      {
        title: "Không đủ điều kiện",
        tag: "coi-a2",
      },
    ],
  },
  {
    title:
      "Đơn hàng không đủ điều kiện thay đổi thông tin/Không xác minh được chính chủ",
    description: `Trả case/thông báo kết quả đến KH:
- Case từ SPE:
  + Đủ điều kiện hỗ trợ: L1 note thông tin + trả case cho SPE + solve case
  + Không đủ điều kiện hỗ trợ: L1 note thông tin + trả case cho SPE + open case
- Case từ Portal: L1 thông báo kết quả đến KH + solve case.`,
    key: "",
    macro:
      "SPX Express rất tiếc chưa thể hỗ trợ thay đổi thông tin cho đơn hàng này. {{CS chủ động phản hồi tùy theo trường hợp}}",
    note: "",
    mail: `Xin chào bạn ABCD,

Cám ơn bạn đã tin dùng dịch vụ của SPX Express, mình là XXX xin phép được hỗ trợ về trường hợp yêu cầu thay đổi thông tin đơn hàng ABC.

Qua kiểm tra thông tin, SPX Express rất tiếc chưa thể hỗ trợ thay đổi thông tin đơn hàng này. {{CS cần chỉnh sửa mail phù hợp với yêu cầu của KH}}

Một vài câu hỏi thường gặp, bạn có thể tham khảo tại Trung tâm trợ giúp tại đường dẫn sau tại https://spx.vn/support-center/faq

Trong trường hợp vấn đề của bạn chưa được xử lý xong, bạn đừng ngại phản hồi qua email để SPX Express tiếp tục hỗ trợ bạn chu đáo hơn
hoặc bạn có thể tham khảo thêm tại Trung tâm trợ giúp.

Thân mến,`,
    main: false,
    image: ["/images/change-order-info.png"],
    tag: "coi-a2",
  },
  {
    title: "Đơn hàng đủ điều kiện thay đổi thông tin",
    description: "CS kiểm tra xem case đến từ đâu?",
    key: "Case đền từ đâu",
    macro: "",
    note: "",
    mail: "",
    main: false,
    image: ["/images/change-order-info.png"],
    tag: "coi-a1",
    children: [
      {
        title: "Case từ SPE",
        tag: "coi-a1-b1",
      },
      {
        title: "Case từ Portal",
        tag: "coi-a1-b2",
      },
    ],
  },
  {
    title: "CS hỗ trợ thay đổi thay đổi thông tin cho KH",
    description:
      "CS sẽ chủ động chỉnh sửa thông tin đơn hàng/tạo ticket FMS báo HUB lưu ý hỗ trợ",
    key: "",
    macro:
      "SPX Express xin ghi nhận thông tin và chuyển cho bộ phận liên quan xem xét hỗ trợ thay đổi thông tin đơn hàng trong 1-2 ngày làm việc tiếp theo. Bạn vui lòng tiếp tục theo dõi thông tin đơn hàng giúp mình ạ.",
    note: "",
    mail: `Thân chào bạn ABCD,

Cám ơn bạn đã tin dùng dịch vụ của SPX Express, mình là XXX xin phép được hỗ trợ về trường hợp yêu cầu thay đổi thông tin đơn hàng ABC.

SPX Express xin ghi nhận thông tin và chuyển cho bộ phận liên quan xem xét hỗ trợ thay đổi thông tin đơn hàng trong 1-2 ngày làm việc tiếp theo. Bạn vui lòng tiếp tục theo dõi thông tin đơn hàng giúp SPX Express nhé!

Một vài câu hỏi thường gặp, bạn có thể tham khảo tại Trung tâm trợ giúp tại đường dẫn sau tại https://spx.vn/support-center/faq

Trong trường hợp vấn đề của bạn chưa được xử lý xong, bạn đừng ngại phản hồi qua email để SPX Express tiếp tục hỗ trợ bạn chu đáo hơn
hoặc bạn có thể tham khảo thêm tại Trung tâm trợ giúp.

Thân mến,`,
    main: false,
    image: ["/images/change-order-info.png"],
    tag: "coi-a1-b1",
  },
  {
    title: "Case từ Portal",
    description: `CS cần xác minh chính chủ của người liên hệ với các thông tin sau:
- Mã vận đơn
- Giá trị/tên sản phẩm
- SDT/địa chỉ trên đơn hàng
* Cần pass 3 điều kiện trên (các điều kiện có 2 thông tin "hoặc", chỉ cần pass 1 trong 2)`,
    key: "",
    macro: "",
    note: "",
    mail: "",
    main: false,
    image: ["/images/change-order-info.png"],
    tag: "coi-a1-b2",
    children: [
      {
        title: "Xác minh chính chủ thành công",
        tag: "coi-a1-b1",
      },
      {
        title: "Không chính chủ",
        tag: "coi-a2",
      },
    ],
  },
  // thái độ rider
  {
    title: "Khiếu nại thái độ Rider",
    description: "Quy trình sẽ sớm được cập nhật.",
    key: "",
    main: true,
    image: ["/images/thai-do-1.png", "/images/thai-do-2.png"],
    macro: "",
    note: "",
    mail: "",
    tag: "thaido",
    children: [],
  },
  //
  {
    title: "Rider thu sai tiền",
    description: "Quy trình sẽ sớm được cập nhật.",
    key: "",
    main: true,
    image: ["/images/thu-sai-tien-1.png", "/images/thu-sai-tien-2.png"],
    macro: "",
    note: "",
    mail: "",
    tag: "tst",
    children: [],
  },
  //
  {
    title: "Sản phẩm bị hư hỏng sau khi giao",
    description: "Quy trình sẽ sớm được cập nhật.",
    key: "",
    main: true,
    image: ["/images/huhong-1.png", "/images/huhong-2.png"],
    macro: "",
    note: "",
    mail: "",
    tag: "huhong",
    children: [],
  },
  //
  {
    title: "Giao thiếu/hàng rỗng/sai hàng",
    description: "Quy trình sẽ sớm được cập nhật.",
    key: "",
    main: true,
    image: ["/images/ghs-1.png", "/images/ghs-2.png"],
    macro: "",
    note: "",
    mail: "",
    tag: "ghs",
    children: [],
  },
  //
  {
    title: "Giao sai người nhận",
    description: "Quy trình sẽ sớm được cập nhật.",
    key: "",
    main: true,
    image: ["/images/snn-1.png", "/images/snn-2.png"],
    macro: "",
    note: "",
    mail: "",
    tag: "snn",
    children: [],
  },
];
