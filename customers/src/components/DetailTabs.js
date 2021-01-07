import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../styles/detail-tabs.scss';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const TimeFilm = (props) => {
  let history = useHistory();
  const bookingSeat = () => {
    history.push({
      pathname: '/booking/' + props.nameMovie,
      state: { 
        threater: props.threater,
        address: props.address,
        room: props.room,
        name: props.nameMovie,
        timeStart: props.timeStart,
        date: props.date,
        day: props.name,
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
        { props.listDate.map((item, index) => {
          return (
            <Tab key={index} className="date-list__item"><span>{item.name}</span><span>{moment(item.date).format('DD')}</span></Tab>
          )
        })}
      </TabList>
      { props.listDate.map((item, index) => {
        return (
          <TabPanel key={index}>
            <ThreaterDetail threater={props.threater} nameMovie={props.nameMovie} {...item} listTime={props.listTime[index]} dateSelected={date}/>
          </TabPanel>
        )
      })}
    </Tabs>
  )
}

export default function DetailTabs(props) {

  const filmSchedule = [
    {
      id: 1,
      image: '/assets/threater1.jpg',
      name: 'BHD Star - Vincom 3/2',
      address: 'L5-Vincom 3/2, 3C Đường 3/2, Q.10',
      listDate: [
        {
          name: 'Thứ 2',
          date: '2021/01/04'
        },
        {
          name: 'Thứ 3',
          date: '2021/01/05'
        },
        {
          name: 'Thứ 4',
          date: '2021/01/06'
        },
        {
          name: 'Thứ 5',
          date: '2021/01/07'
        },
        {
          name: 'Thứ 6',
          date: '2021/01/08'
        },
        {
          name: 'Thứ 7',
          date: '2021/01/09'
        },
        {
          name: 'Chủ nhật',
          date: '2021/01/10'
        }
      ],
      listTime: [
        [
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
        ],
        [
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
        ],
        [
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
        ],
        [
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
        ],
        [
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
        ],
        [
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
        ],
        [
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
      ]
    },
    {
      id: 2,
      image: '/assets/threater2.jpg',
      name: 'BHD Star - Bitexco',
      address: 'L3-Bitexco Icon 68, 2 Hải Triều, Q.1',
      listDate: [
        {
          name: 'Thứ 2',
          date: '2021/01/04'
        },
        {
          name: 'Thứ 3',
          date: '2021/01/05'
        },
        {
          name: 'Thứ 4',
          date: '2021/01/06'
        },
        {
          name: 'Thứ 5',
          date: '2021/01/07'
        },
        {
          name: 'Thứ 6',
          date: '2021/01/08'
        },
        {
          name: 'Thứ 7',
          date: '2021/01/09'
        },
        {
          name: 'Chủ nhật',
          date: '2021/01/10'
        }
      ],
      listTime: [
        [
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
        ],
        [
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
        ],
        [
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
        ],
        [
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
        ],
        [
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
        ],
        [
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
        ],
        [
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
      ]
    }
  ]

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
            { filmSchedule.map(item => {
              return (
                <Tab key={`threater${item.id}`} className="threater-list__item">
                  <div className="threater-detail__image">
                    <img src={`${item.image}`} alt=""/>
                  </div>
                  <div className="threater-detail__content">
                    <div className="threater-detail__name">{item.name}</div>
                    <div className="threater-detail__address">{item.address}</div>
                  </div>
                </Tab>
              )
            })}
          
          </TabList>
          { filmSchedule.map(item => {
              return (
                <TabPanel key={`id${item.id}`} className="threater-content">
                  <TabsDate listDate={item.listDate} listTime={item.listTime} threater={item.name} nameMovie={props.name}/>
                </TabPanel>
              )
            })}
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