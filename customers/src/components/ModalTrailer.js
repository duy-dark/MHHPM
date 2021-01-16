import React from 'react';
import Modal from 'react-bootstrap/Modal';
import '../styles/modal-trailer.scss';

export default function ModalTrailer(props) {
  const trailerAll = () => {
    switch (props.id) {
      case "5ff13d58c377292934d208df":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="409" src="https://www.youtube.com/embed/HmBvoXsU83Q" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "5ff14201ad87be0d3c8f9d8c":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="409" src="https://www.youtube.com/embed/puQyZsaTtqY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "5ff14348ad87be0d3c8f9d8d":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="364" src="https://www.youtube.com/embed/uqAVt13jlr0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "5ff1460f63ccaf2a14e45104":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="409" src="https://www.youtube.com/embed/Vk-gqL3c5qU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "5ff147f263ccaf2a14e45106":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="409" src="https://www.youtube.com/embed/H0jn6R1bpcw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "5ff14974773a790ef47cc1b8":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="409" src="https://www.youtube.com/embed/9m5HbGDFBrI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "5ffadbab529bd58b18ed2fe6":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="367" src="https://www.youtube.com/embed/04lWsyKnY70" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "600258ba9146e837e8522db0":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="409" src="https://www.youtube.com/embed/_ffRLhWSPGk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "60026e43154c62152832ce7f":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="409" src="https://www.youtube.com/embed/M4Zn8gumnr8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "6002705b154c62152832ce80":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="366" src="https://www.youtube.com/embed/NWEe2BGhOUA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "60027192154c62152832ce81":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="538" src="https://www.youtube.com/embed/_ViMJjyY8i4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "6002751d154c62152832ce82":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="538" src="https://www.youtube.com/embed/VKyz5SVH1Ug" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "600293299b1d0a0d788bc18c":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="538" src="https://www.youtube.com/embed/935dFLgEwfU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "600294219b1d0a0d788bc18d":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="538" src="https://www.youtube.com/embed/Q3f9eTTsEeg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      case "600295819b1d0a0d788bc18e":
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        return (<iframe width="1045" height="538" src="https://www.youtube.com/embed/FJfuVkgcDJQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
      default:
        break;
    }
  }
  return (
    <Modal
      {...props}
      className="modal--trailer"
      centered
    >
      { trailerAll() }
    </Modal>
  )
}