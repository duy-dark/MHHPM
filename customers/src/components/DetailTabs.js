import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../styles/detail-tabs.scss';
import icBHD from '../assets/ic_bhd.png';
import icDDC from '../assets/ic_ddc.png';
import icCIN from '../assets/ic_cinestar.png';
import icLOT from '../assets/ic_lotte.png';
import { useHistory } from 'react-router-dom';

const TimeFilm = (props) => {
  let history = useHistory();
  const date = [
    { name: 'Thứ 2', date: '2020/12/28' },
    { name: 'Thứ 3', date: '2020/12/29' },
    { name: 'Thứ 4', date: '2020/12/30' },
    { name: 'Thứ 5', date: '2020/12/31' },
    { name: 'Thứ 6', date: '2021/01/01' },
    { name: 'Thứ 7', date: '2020/01/02' },
    { name: 'Chủ nhật', date: '2020/01/03' },
  ]
  const bookingSeat = () => {
    history.push({
      pathname: '/booking/' + props.nameMovie,
      state: { 
        threater: props.name,
        threaterImg: props.image,
        address: props.address,
        room: props.room,
        name: props.nameMovie,
        timeStart: props.timeStart,
        date: date[props.dateSelected],
        typeThreater: props.threater
      }
    })
  }
  return (
    <div className="time-film" onClick={bookingSeat}>
      <span>{props.timeStart}</span>
      <span>~</span>
      <span>{props.timeEnd}</span>
    </div>
  )
}

const ThreaterDetail = (props) => {
  return (
    <div className="threater-detail">
      <div className="threater-detail__threater">
        <div className="threater-detail__image">
          <img src={`${props.image}`} alt=""/>
        </div>
        <div className="threater-detail__content">
          <div className="threater-detail__name">{props.name}</div>
          <div className="threater-detail__address">{props.address}</div>
        </div>
      </div>
      <div className="threater-detail__schedule">
        <div className="threater-detail__title">2D Digital</div>
        <div className="threater-detail__list-time">
          { props.listTime.map((item, index) => <TimeFilm key={index} {...item} {...props} />)}
        </div>
      </div>
    </div>
  )
}

const TabsDate = (props) => {
  const [date, setDate] = useState(0)
  return (
    <Tabs className="date" onSelect={index => setDate(index)}>
      <TabList className="date-list">
        <Tab className="date-list__item"><span>Thứ 2</span><span>28</span></Tab>
        <Tab className="date-list__item"><span>Thứ 3</span><span>29</span></Tab>
        <Tab className="date-list__item"><span>Thứ 4</span><span>30</span></Tab>
        <Tab className="date-list__item"><span>Thứ 5</span><span>31</span></Tab>
        <Tab className="date-list__item"><span>Thứ 6</span><span>01</span></Tab>
        <Tab className="date-list__item"><span>Thứ 7</span><span>02</span></Tab>
        <Tab className="date-list__item"><span>chủ nhật</span><span>03</span></Tab>
      </TabList>
      { props.listDate.map((item, index) => {
        return (
          <TabPanel key={index}>
            { item.length > 0 && item.map((i, index1) => <ThreaterDetail key={index1} threater={props.threater} nameMovie={props.nameMovie} {...i} dateSelected={date}/>) }
          </TabPanel>
        )
      })}
    </Tabs>
  )
}

export default function DetailTabs(props) {
  const bhd = {
    listDate: [
      [
        {
          image: '/assets/threater1.jpg',
          name: 'BHD Star - Vincom 3/2',
          address: 'L5-Vincom 3/2, 3C Đường 3/2, Q.10',
          listTime: [
            {
              timeStart: '14:10',
              timeEnd: '15:50',
              room: 'rạp 1'
            },
            {
              timeStart: '17:05',
              timeEnd: '18:45',
              room: 'rạp 2'
            },
            {
              timeStart: '19:45',
              timeEnd: '21:25',
              room: 'rạp 3'
            }
          ]
        },
        {
          image: '/assets/threater2.jpg',
          name: 'BHD Star - Bitexco',
          address: 'L3-Bitexco Icon 68, 2 Hải Triều, Q.1',
          listTime: [
            {
              timeStart: '12:10',
              timeEnd: '13:50',
              room: 'rạp 1'
            },
            {
              timeStart: '14:05',
              timeEnd: '15:45',
              room: 'rạp 2'
            },
            {
              timeStart: '16:45',
              timeEnd: '18:25',
              room: 'rạp 3'
            }
          ]
        }
      ],
      [
        {
          image: '/assets/threater1.jpg',
          name: 'BHD Star - Vincom 3/2',
          address: 'L5-Vincom 3/2, 3C Đường 3/2, Q.10',
          listTime: [
            {
              timeStart: '1:10',
              timeEnd: '2:50',
              room: 'rạp 1'
            },
            {
              timeStart: '3:05',
              timeEnd: '4:45',
              room: 'rạp 2'
            },
            {
              timeStart: '5:45',
              timeEnd: '7:25',
              room: 'rạp 3'
            }
          ]
        },
        {
          image: '/assets/threater2.jpg',
          name: 'BHD Star - Bitexco',
          address: 'L3-Bitexco Icon 68, 2 Hải Triều, Q.1',
          listTime: [
            {
              timeStart: '7:10',
              timeEnd: '9:50',
              room: 'rạp 1'
            },
            {
              timeStart: '8:05',
              timeEnd: '10:45',
              room: 'rạp 2'
            },
            {
              timeStart: '11:45',
              timeEnd: '13:25',
              room: 'rạp 3'
            }
          ]
        }
      ],
      [],
      [],
      [],
      [],
      []
    ]
  }
  const cin = {
    listDate: [
      [
        {
          image: '/assets/threatercin1.jpg',
          name: 'CNS - Quốc Thanh',
          address: '271 Nguyễn Trãi, Q.1',
          listTime: [
            {
              timeStart: '14:10',
              timeEnd: '15:50',
              room: 'rạp 1'
            },
            {
              timeStart: '17:05',
              timeEnd: '18:45',
              room: 'rạp 2'
            },
            {
              timeStart: '19:45',
              timeEnd: '21:25',
              room: 'rạp 3'
            }
          ]
        }
      ],
      [],
      [],
      [],
      [],
      [],
      []
    ]
  }
  const ddc = {
    listDate: [[], [], [], [], [], [], []]
  }
  const lotte = {
    listDate: [[], [], [], [], [], [], []]
  }
  return (
    <Tabs className="detail-content">
      <TabList className="detail-tab-list">
        <Tab>Lịch Chiếu</Tab>
        <Tab>Thông Tin</Tab>
        <Tab>Đánh Giá</Tab>
      </TabList>

      <TabPanel className="detail-tab-threater">
        <Tabs className="threater">
          <TabList className="threater-list">
            <Tab className="threater-list__item">
              <img src={icBHD} alt=""/>
              <div>BHD Star</div>
            </Tab>
            <Tab className="threater-list__item">
              <img src={icCIN} alt=""/>
              <div>Cinestar</div>
            </Tab>
            <Tab className="threater-list__item">
              <img src={icDDC} alt=""/>
              <div>DDC - Đống Đa</div>
            </Tab>
            <Tab className="threater-list__item">
              <img src={icLOT} alt=""/>
              <div>Lotte Cinema</div>
            </Tab>
          </TabList>

          <TabPanel className="threater-content">
            <TabsDate {...bhd} nameMovie={props.name} threater="bhd"/>
          </TabPanel>
          <TabPanel className="threater-content">
            <TabsDate {...cin} nameMovie={props.name} threater="cinestar"/>
          </TabPanel>
          <TabPanel className="threater-content">
            <TabsDate {...ddc} nameMovie={props.name} threater="ddc"/>
          </TabPanel>
          <TabPanel className="threater-content">
            <TabsDate {...lotte} nameMovie={props.name} threater="lotte"/>
          </TabPanel>
        </Tabs>
      </TabPanel>
      <TabPanel className="detail-tab-info">
        <div className="detail-info__info">
          <table>
            <tr>
              <th>Ngày công chiếu</th>
              <td>18.12.2020</td>
            </tr>
            <tr>
              <th>Đạo diễn</th>
              <td>Patty Jenkins</td>
            </tr>
            <tr>
              <th>Diễn viên</th>
              <td>Chris Pine, Gal Gadot</td>
            </tr>
            <tr>
              <th>Thể Loại</th>
              <td>hành động, phiêu lưu, giả tưởng</td>
            </tr>
            <tr>
              <th>Định dạng</th>
              <td>2D/Digital</td>
            </tr>
            <tr>
              <th>Quốc Gia SX</th>
              <td>Mỹ</td>
            </tr>
          </table>
        </div>
        <div className="detail-info__content">
          <p className="detail-info__content__title">Nội dung</p>
          <p>Lấy bối cảnh thời kỳ Chiến tranh Lạnh, Wonder Woman 1984 sẽ xoay quanh cuộc đối đầu giữa Nữ thần Chiến binh và Yêu nữ Báo đốm Cheetah.</p>
        </div>
      </TabPanel>
      <TabPanel className="detail-tab-comment">
        <div className="card-comment">
          <input type="text" placeholder="Bạn nghĩ gì về phim này?"/>
        </div>
      </TabPanel>
    </Tabs>
  )
}