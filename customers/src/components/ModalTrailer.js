import React from 'react';
import Modal from 'react-bootstrap/Modal';

export default function ModalTrailer(props) {
  const trailerAll = () => {
    switch (props.id) {
      case '5ff13d58c377292934d208df':
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="956" height="538" src="https://www.youtube.com/embed/Ncwkodt5dA4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
      case '5ff14201ad87be0d3c8f9d8c':
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="956" height="538" src="https://www.youtube.com/embed/iCw-LfLw_Zk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
      case '5ff14348ad87be0d3c8f9d8d':
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="434" src="https://www.youtube.com/embed/D6zVlPKn2AI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
      case '5ff1460f63ccaf2a14e45104':
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="956" height="538" src="https://www.youtube.com/embed/XW2E2Fnh52w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
      case '5ff147f263ccaf2a14e45106':
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="956" height="538" src="https://www.youtube.com/embed/aFOfjggI9-Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
      case '5ff14974773a790ef47cc1b8':
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="956" height="538" src="https://www.youtube.com/embed/Ncwkodt5dA4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
      case '5ff14aa1773a790ef47cc1b9':
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="956" height="538" src="https://www.youtube.com/embed/kJcfrHDTSEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
      case '5ff2c769795de710ccfc07c0':
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="438" src="https://www.youtube.com/embed/VTnGOjtaWAY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)
      case '5ff530029060802378ba7aa0':
        break;
      case '5ffadbab529bd58b18ed2fe6':
        break;
      default:
        break;
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      { trailerAll() }
    </Modal>
  )
}