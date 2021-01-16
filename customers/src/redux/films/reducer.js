import FilmTypes from './types';
// import update from 'immutability-helper';

const initialState = {
  status: true,
  films: [
    {
      _id: '5ff13d58c377292934d208df',
      name: 'Chị Mười Ba: 3 Ngày Sinh Tử',
      trailer: 'https://www.youtube.com/watch?v=HmBvoXsU83Q',
      content: 'Phần hai Chị Mười Ba: 3 Ngày Sinh Tử được đầu tư hoành tráng hơn với những màn rượt đuổi ngẹt thở, những pha đánh đấm chân thật hơn, hứa hẹn “bùng cháy” mạnh mẽ và kịch tính vào tháng 12 này',
      countries: 'Việt Nam',
      long_time: 100,
      start_date: '2020-12-25T00:00:00.000Z',
      directors: 'Tiến Luật',
      actors: 'Thu Trang',
      rates: 4,
      rate_count: 190,
      imdb: '8.5',
      digitals: '2D/Digital',
      url_avatar: 'https://s3img.vcdn.vn/mobile/123phim/2020/11/chi-muoi-ba-2-16061875740652_215x318.png',
      url_background: 'https://s3img.vcdn.vn/123phim/2020/12/chi-muoi-ba-3-ngay-sinh-tu-c18-16085347182054.png',
      is_blockbuster: false,
      is_deleted: false,
      created_at: '2021-01-03T03:43:20.404Z',
      updated_at: '2021-01-03T03:43:20.404Z',
      category_ids: [
        '5ff1df67d4865f3ac0aab8ee',
        '5ff1e10fd4865f3ac0aab8ef'
      ]
    },
    {
      _id: '5ff14201ad87be0d3c8f9d8c',
      name: 'Thợ Săn Quái Vật - Monster Hunter',
      trailer: 'https://www.youtube.com/watch?v=puQyZsaTtqY&feature=emb_logo',
      content: 'Monster Hunter được chuyển thể từ series game nổi tiếng cùng tên của Capcom. Trong phim, đội trưởng Artemis của nữ diễn viên Milla Jovovich (Resident Evil) và đồng đội đã vô tình bước qua một cánh cửa bí ẩn dẫn tới thế giới khác. Tại đây, họ phải chiến đấu với nhiều loài quái vật khổng lồ trong hành trình trở về thế giới. Đồng hành với họ trong trận chiến là nhân vật “Thợ săn” của nam diễn viên Tony Jaa (Ong Bak). Monster Hunter hứa hẹn sẽ là bom tấn hành động với những màn săn quái vật khổng lồ hoành tráng nhất năm 2020.',
      countries: 'Mỹ',
      long_time: 104,
      start_date: '2020-12-30T00:00:00.000Z',
      directors: 'Paul W.S. Anderson',
      actors: '',
      rates: 4,
      rate_count: 190,
      imdb: 9,
      digitals: '2D/Digital',
      url_avatar: 'https://s3img.vcdn.vn/mobile/123phim/2020/12/tho-san-quai-vat-monster-hunter-c13-16091253467891_215x318.png',
      url_background: 'https://s3img.vcdn.vn/123phim/2020/12/tho-san-quai-vat-monster-hunter-c13-16091253327871.png',
      is_blockbuster: false,
      is_deleted: false,
      created_at: '2021-01-03T04:03:13.431Z',
      updated_at: '2021-01-03T04:03:13.431Z',
      category_ids: [
        '5ff1df67d4865f3ac0aab8ee',
        '5ff1e10fd4865f3ac0aab8f4'
      ]
    },
    {
      _id: '5ff14348ad87be0d3c8f9d8d',
      name: 'Cuộc Sống Nhiệm Màu - Soul',
      trailer: 'https://www.youtube.com/watch?time_continue=1&v=uqAVt13jlr0&feature=emb_logo',
      content: 'Điều gì khiến bạn là chính bạn? Cuối năm nay, hãng phim hoạt hình danh tiếng Pixar sẽ trình làng một tác phẩm mới mang tên SOUL – CUỘC SỐNG NHIỆM MÀU với nhân vật chính là Joe Gardner (Jamie Foxx lồng tiếng) một giáo viên dạy nhạc ở trường trung học. Anh vừa nhận được một cơ hội duy nhất trong đời khi có thể được tham gia chơi Jazz cho một ban nhạc nổi nhất thành phố. Nhưng một bước chân sai lầm đã đưa anh từ thành phố New York hoa lệ đến Cõi Trước – một nơi kỳ diệu mà ở đó các linh hồn được nhận tính cách, sở thích trước khi họ đi đến Trái Đất. Quyết tâm trở về cuộc đời của chính mình, Joe hợp tác với một linh hồn bất hảo mang tên 22 (lồng tiếng bởi Tina Fey) - người chưa bao giờ hiểu được sự hấp dẫn của cuộc sống loài người. Joe cố gắng hết mình để cho 22 thấy cuộc sống này nhiệm màu như thế nào, đồng thời anh ấy cũng khám phá ra câu trả lời quan trọng cho đời người.',
      countries: 'Mỹ',
      long_time: 100,
      start_date: '2020-12-25T00:00:00.000Z',
      directors: 'Pete Docter, Kemp Powers',
      actors: 'Jamie Foxx',
      rates: 4,
      rate_count: 190,
      imdb: 8.8,
      digitals: '2D/Digital',
      url_avatar: 'https://s3img.vcdn.vn/mobile/123phim/2020/10/soul-16032488077578_215x318.png',
      url_background: 'https://s3img.vcdn.vn/123phim/2020/10/soul-16032487916084.png',
      is_blockbuster: true,
      is_deleted: false,
      created_at: '2021-01-03T04:08:40.376Z',
      updated_at: '2021-01-03T04:08:40.376Z',
      category_ids: [
        '5ff1e10fd4865f3ac0aab8f2',
        '5ff1e10fd4865f3ac0aab8f0'
      ]
    },
    {
      _id: '5ff1460f63ccaf2a14e45104',
      name: 'Nữ Thần Chiến Binh 1984 - Wonder Woman 1984',
      trailer: 'https://www.youtube.com/watch?v=Vk-gqL3c5qU&feature=emb_logo',
      content: 'Lấy bối cảnh thời kỳ Chiến tranh Lạnh, Wonder Woman 1984 sẽ xoay quanh cuộc đối đầu giữa Nữ thần Chiến binh và Yêu nữ Báo đốm Cheetah.',
      countries: 'Mỹ',
      long_time: 100,
      start_date: '2020-12-18T00:00:00.000Z',
      directors: 'Patty Jenkins',
      actors: 'Chris Pine, Gal Gadot',
      rates: 4,
      rate_count: 190,
      imdb: 7,
      digitals: '2D/Digital',
      url_avatar: 'https://s3img.vcdn.vn/mobile/123phim/2020/12/nu-than-chien-binh-1984-wonder-woman-1984-16069039499631_215x318.png',
      url_background: 'https://s3img.vcdn.vn/123phim/2018/11/nu-than-chien-binh-1984-wonder-woman-1984-15411453088668.jpg',
      is_blockbuster: false,
      is_deleted: false,
      created_at: '2021-01-03T04:20:31.282Z',
      updated_at: '2021-01-03T04:23:26.799Z',
      category_ids: [
        '5ff1df67d4865f3ac0aab8ee',
        '5ff1e10fd4865f3ac0aab8f4'
      ]
    },
    {
      _id: '600258ba9146e837e8522db0',
      category_ids: [
        '6002571b5390f41028d5df63',
        '5ff1e10fd4865f3ac0aab8f0',
        '5ff1df67d4865f3ac0aab8ee'
      ],
      name: 'Sám Hối',
      trailer: 'https://www.youtube.com/watch?v=_ffRLhWSPGk&feature=emb_logo',
      content: 'Sám Hối kể về câu chuyện cuộc đời của một võ sĩ tên Long (Bình Minh). Là một nhà vô địch bất bại trên sàn đấu khiến Long trở nên tự mãn và coi thường người khác. Nhưng từ sự ngạo mạn đó đã kéo theo nhiều rắc rối khiến gia đình anh tan nát. Long phải đánh đổi lòng tự trọng, danh dự của một võ sĩ, cúi đầu trước những kẻ mà anh đã từng khinh khi để cứu lấy gia đình',
      countries: 'Việt Nam',
      long_time: 99,
      start_date: '2021-01-15T00:00:00.000Z',
      directors: 'Peter Hein',
      actors: 'Phan Gia Nhật Linh',
      rates: 7,
      rate_count: 9,
      imdb: 7,
      digitals: '2D/Digital',
      url_avatar: 'https://s3img.vcdn.vn/mobile/123phim/2021/01/sam-hoi-16105115146337_215x318.png',
      url_background: 'https://s3img.vcdn.vn/123phim/2021/01/sam-hoi-c18-16106871788700.jpg',
      is_blockbuster: false,
      is_deleted: false,
      created_at: '2021-01-16T03:08:42.653Z',
      updated_at: '2021-01-16T03:08:42.653Z'
    },
    {
      _id: '60026e43154c62152832ce7f',
      category_ids: [
        '5ff1e10fd4865f3ac0aab8ef'
      ],
      name: 'Cậu Vàng',
      trailer: 'https://youtu.be/M4Zn8gumnr8',
      content: 'Gia đình Lão Hạc (Cò, Cậu Vàng) đang sống an lành trên mảnh vườn do ông cha khai hoang để lại thì bất ngờ tai họa ập đến. Nguyên nhân là địa chủ Bá Kiến muốn chiếm đoạt (ép bán lại) mảnh vườn vì trên đó có cái Giếng nước cổ, được thầy bói cho đó là “ Long Mạch “ của làng.Bằng nhiều thủ đoạn, từ gạ bán đến thuê lưu manh phá phách, đầu độc cậu Vàng đến ép khống thuế… gia đình Bá Kiến quyết đẩy Lão Hạc tới con đường cùng.Nhưng với sự giúp đỡ của những người hàng xóm tử tế chân chất như vợ chồng Giáo Thứ, Binh Tư và đặc biệt là “ Cậu Vàng “ …, Lão Hạc đã giữ được mảnh đất cho con.',
      countries: 'Việt Nam',
      long_time: 96,
      start_date: '2021-01-15T00:00:00.000Z',
      directors: 'Trần Vũ Thủy',
      actors: 'Chó',
      rates: 7,
      rate_count: 9,
      digitals: '2D/Digital',
      url_avatar: 'https://s3img.vcdn.vn/mobile/123phim/2021/01/cau-vang-c16-16098367707354_215x318.png',
      url_background: 'https://s3img.vcdn.vn/123phim/2021/01/cau-vang-c16-16098367597535.png',
      is_blockbuster: false,
      is_deleted: false,
      created_at: '2021-01-16T04:40:35.159Z',
      updated_at: '2021-01-16T04:40:35.159Z'
    },
    {
      _id: '6002705b154c62152832ce80',
      category_ids: [
        '5ff1e10fd4865f3ac0aab8ef'
      ],
      name: 'Lừa Đểu Gặp Lừa Đảo - The Con-Heartist',
      trailer: 'https://youtu.be/NWEe2BGhOUA',
      content: 'Siêu phẩm phim điện ảnh Thái Lan mùa cuối năm 2020: Baifern Pimchanok hóa cô nàng si tình, vì tình mà bị lừa tiền còn Nadech là một kẻ lừa đảo chuyên nghiệp với tài ăn nói khéo léo.',
      countries: 'Thái Lan',
      long_time: 128,
      start_date: '2021-01-15T00:00:00.000Z',
      rates: 7,
      rate_count: 9,
      digitals: '2D/Digital',
      url_avatar: 'https://s3img.vcdn.vn/mobile/123phim/2020/12/lua-deu-gap-lua-dao-the-con-heartist-c16-16082739589858_215x318.png',
      url_background: 'https://s3img.vcdn.vn/123phim/2021/01/lua-deu-gap-lua-dao-the-con-heartist-c16-16105107876781.jpg',
      is_blockbuster: false,
      is_deleted: false,
      created_at: '2021-01-16T04:49:31.573Z',
      updated_at: '2021-01-16T04:49:31.573Z'
    },
    {
      _id: '60027192154c62152832ce81',
      category_ids: [
        '5ff1e10fd4865f3ac0aab8f2',
        '5ff1e10fd4865f3ac0aab8f1'
      ],
      name: 'Đường Cong Của Quỷ - The Cursed Lesson',
      trailer: 'https://youtu.be/jPIBKT9z8_s',
      content: 'Bị ám ảnh bởi việc không còn chỗ đứng trong làng người mẫu, Hyo-jeong tham gia một khóa học Yoga bí ẩn hòng đạt được thân hình hoàn hảo. Bị những điều luật kỳ bí trói buộc cùng hàng loạt sự việc bí ẩn liên tiếp xảy ra, cô càng chìm sâu vào ám ảnh và không thể thoát khỏi nơi này.',
      countries: 'Hàn Quốc',
      long_time: 88,
      start_date: '2021-01-15T00:00:00.000Z',
      directors: 'Jai-hong Juhn, Ji-han Kim',
      rates: 7,
      rate_count: 9,
      digitals: '2D/Digital',
      url_avatar: 'https://s3img.vcdn.vn/mobile/123phim/2021/01/duong-cong-cua-quy-the-cursed-lesson-c18-16105109796358_215x318.png',
      url_background: 'https://s3img.vcdn.vn/123phim/2021/01/duong-cong-cua-quy-the-cursed-lesson-c18-16105110777440.png',
      is_blockbuster: false,
      is_deleted: false,
      created_at: '2021-01-16T04:54:42.881Z',
      updated_at: '2021-01-16T04:54:42.881Z'
    },
    {
      _id: '6002751d154c62152832ce82',
      category_ids: [
        '5ff1e10fd4865f3ac0aab8f2',
        '5ff1e10fd4865f3ac0aab8f1'
      ],
      name: 'Sword Art Online: Ordinal Scale',
      trailer: 'https://www.youtube.com/watch?v=Xu3FqvH11To',
      content: 'Kirito khám phá ra một âm mưu trong Ordinal Scale - một trò chơi AR phổ biến được phát triển cho một hệ thống mới có tên là The Augma.',
      countries: 'Nhật Bản',
      long_time: 119,
      start_date: '2021-01-15T00:00:00.000Z',
      directors: 'Tomohiko Itô',
      rates: 7,
      rate_count: 9,
      digitals: '2D/Digital',
      url_avatar: 'https://s3img.vcdn.vn/mobile/123phim/2021/01/sword-art-online-ordinal-scale-c13-16106839443272_215x318.png',
      url_background: 'https://s3img.vcdn.vn/123phim/2021/01/sword-art-online-ordinal-scale-c13-16106839328140.png',
      is_blockbuster: false,
      is_deleted: false,
      created_at: '2021-01-16T05:09:49.223Z',
      updated_at: '2021-01-16T05:09:49.223Z'
    }
  ],
  theaters: [
    {
      rooms: [
        {
          name: 'rạp 1'
        },
        {
          name: 'rạp 2'
        },
        {
          name: 'rạp 3'
        },
        {
          name: 'rạp 4'
        },
        {
          name: 'rạp 5'
        },
        {
          name: 'rạp 6'
        }
      ],
      _id: '60028091501dbc0ec82ce3b0',
      name: 'BHD Star - Bitexco',
      address: 'L3-Bitexco Icon 68, 2 Hải Triều, Q.1',
      url_image: 'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952220224.png'
    },
    {
      rooms: [
        {
          name: 'rạp 1'
        },
        {
          name: 'rạp 2'
        },
        {
          name: 'rạp 3'
        },
        {
          name: 'rạp 4'
        },
        {
          name: 'rạp 5'
        },
        {
          name: 'rạp 6'
        }
      ],
      _id: '600280e3501dbc0ec82ce3b1',
      name: 'BHD Star - Vincom Thảo',
      address: 'L5-Megamall, 159 XL Hà Nội, Q.2',
      url_image: 'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-vincom-thao-dien-16105956028741.png'
    },
    {
      rooms: [
        {
          name: 'rạp 1'
        },
        {
          name: 'rạp 2'
        },
        {
          name: 'rạp 3'
        },
        {
          name: 'rạp 4'
        },
        {
          name: 'rạp 5'
        },
        {
          name: 'rạp 6'
        }
      ],
      _id: '60028115501dbc0ec82ce3b2',
      name: 'BHD Star Vincom 3/2',
      address: 'L5-Vincom 3/2, 3C Đường 3/2, Q.10',
      url_image: 'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-vincom-3-2-16105958137807.png'
    },
    {
      rooms: [
        {
          name: 'rạp 1'
        },
        {
          name: 'rạp 2'
        },
        {
          name: 'rạp 3'
        },
        {
          name: 'rạp 4'
        },
        {
          name: 'rạp 5'
        },
        {
          name: 'rạp 6'
        }
      ],
      _id: '60028152501dbc0ec82ce3b3',
      name: 'BHD Star \u200ePhạm Hùng',
      address: 'L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh',
      url_image: 'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-pham-hung-16105959366367.png'
    },
    {
      rooms: [
        {
          name: 'rạp 1'
        },
        {
          name: 'rạp 2'
        },
        {
          name: 'rạp 3'
        },
        {
          name: 'rạp 4'
        },
        {
          name: 'rạp 5'
        },
        {
          name: 'rạp 6'
        }
      ],
      _id: '6002818b501dbc0ec82ce3b4',
      name: 'BHD Star Vincom Quang Trung',
      address: 'B1-Vincom QT, 190 Quang Trung, Gò Vấp',
      url_image: 'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-vincom-quang-trung-16105960734310.png'
    },
    {
      rooms: [
        {
          name: 'rạp 1'
        },
        {
          name: 'rạp 2'
        },
        {
          name: 'rạp 3'
        },
        {
          name: 'rạp 4'
        },
        {
          name: 'rạp 5'
        },
        {
          name: 'rạp 6'
        }
      ],
      _id: '600281ae501dbc0ec82ce3b5',
      name: 'BHD Star Vincom Lê Văn Việt',
      address: 'L4-Vincom Plaza, 50 Lê Văn Việt, Q.9',
      url_image: 'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-vincom-le-van-viet-16105962163646.png'
    }
  ],
  filmDetail: {}
}

export default function filmsReducer(state = initialState, action) {
  let newState;

  const { type, payload = {} } = action;
  switch (type) {
    case FilmTypes.FILM_DETAIL_SUCCESS:
      console.log(payload)
      newState = Object.assign({}, state, { filmDetail: payload })
      break;
    default: 
      newState = state;
  }
  return newState
}