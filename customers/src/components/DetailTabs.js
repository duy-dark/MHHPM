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
        timeStart: moment(props.time_start).format('hh:mm'),
        date: props.date,
        day: props.name,
        typeThreater: props.threater,
        scheduleId: props._id
      }
    })
  }
  return (
    <div className="time-film" onClick={bookingSeat}>
      <span>{ moment(props.time_start).format('hh:mm')}</span>
      <span>~</span>
      <span>{ moment(props.time_end).format('hh:mm') }</span>
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
            <Tab key={index} className="date-list__item"><span>{item.name}</span><span>{item.day}</span></Tab>
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
            { props.filmSchedule.map(item => {
              return (
                <Tab key={item._id} className="threater-list__item">
                  <div className="threater-detail__image">
                    <img src={`${item.url_image}`} alt=""/>
                  </div>
                  <div className="threater-detail__content">
                    <div className="threater-detail__name">{item.name}</div>
                    <div className="threater-detail__address">{item.address}</div>
                  </div>
                </Tab>
              )
            })}
          
          </TabList>
          {
            props.filmSchedule.map(item => {
              return (
                <TabPanel key={item._id} className="threater-content">
                  <TabsDate listDate={item.listDate} listTime={item.listTime} threater={item.name} nameMovie={props.filmDetail.name}/>
                </TabPanel>
              )
            })
          }
        </Tabs>
      </TabPanel>
      <TabPanel className="detail-tab-info">
        <div className="detail-info__info">
          <table>
            <tbody>
              <tr>
                <th>Ngày công chiếu</th>
                <td>{ moment(props.filmDetail.start_date).format('DD/MM/YYYY')}</td>
              </tr>
              <tr>
                <th>Đạo diễn</th>
                <td>{props.filmDetail.directors}</td>
              </tr>
              <tr>
                <th>Diễn viên</th>
                <td>{props.filmDetail.actors}</td>
              </tr>
              <tr>
                <th>Thể Loại</th>
                <td>{ props.filmDetail.categories.map(item => item.name) }</td>
              </tr>
              <tr>
                <th>Định dạng</th>
                <td>{ props.filmDetail.digitals }</td>
              </tr>
              <tr>
                <th>Quốc Gia SX</th>
                <td>{ props.filmDetail.countries }</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="detail-info__content">
          <p className="detail-info__content__title">Nội dung</p>
          <p>{ props.filmDetail.content }</p>
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