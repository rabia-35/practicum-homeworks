import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className='header'>
      <Container >
      <div className='text-center '>
        <h3>Karamel Tatlısı</h3>
        <div >
        <FontAwesomeIcon icon={faUtensils}/> <span className="text-muted me-4">6-8 Kişilik</span>
        <FontAwesomeIcon icon={faClock}/> <span className="text-muted"> 5 dk Hazırlık - 20dk Pişirme</span>
        </div>
        <p className='text-muted mt-3 mb-5'>
          Sütlü mü sütlü, tatlı mı tatlı krem karamel tarifimi denemediyseniz mutlaka denemelisiniz. 
          Lezzetine hayran kalacağınız krem karamel tatlısı herkesin gönlünü fethedecek. 
        </p>
      </div>
        <Row  >
          <Col>
            <Image src='/images/caramel.jpg' alt='caramel image' />
          </Col>
          <Col className='mt-4'>
          <h2>Malzemeler</h2>
            <ul>
                <li>1 litre süt</li>
                <li>1 su bardağı toz şeker (200 ml. klasik su bardağı)</li>
                <li>1 su bardağı un</li>
                <li>1 adet yumurta</li>
                <li>2 paket Vanilya</li>
              </ul>
              <h6 >Karamel İçin;</h6>
              <ul>
                <li>1 bardak toz şeker</li>
              </ul>
          </Col>
        </Row>
        <Row>
          <Col>
          <h2 className='text-center my-5'>Karamel Tatlısı Nasıl Yapılır</h2>
            <ol>
              <li> Önce kaselere paylaştırılacak olan karameli yapalım: 1 bardak şeker tencerede orta ateşte karıştırarak yakılır.</li>
              <li> Şeker sıvı hale gelmeye başlayınca altı kısılır.Rengi çok kararmadan altı kapatılır.</li>
              <li>Sıvı şeker fırına dayanıklı kaselere 1 er çorba kaşığı olarak paylaştırılır. Eğer bunu yapacak uygun fırın kaseniz yoksa borcama da yapabilirsiniz.</li>
              <li>Dikkat etmeniz gereken nokta, şekerin çok sıcak olmasıdır. Tencere ve şekerle elinizi yakabilirsiniz.</li>
              <li>Şeker donarken, ki çok çabuk donar, biz muhallebimizi yapacağız.</li>
              <li>Tüm malzeme çırpıcı ile karıştırılır ve ocağın altı açılır.</li>
              <li>Vanilya ocaktan almadan hemen önce koyulmalıdır. 1pk de kullanabilirsiniz. Ben 2 kullandım.</li>
              <li>Dibi tutmaması için devamlı karıştırarak muhallebi pişirilir; kaselerdeki donan şekerin üzerlerine paylaştırılır. Ben fotoğraflarda göreceğiniz gibi çok doldurmadım, porsiyonlar küçük oldu. Sizin tam doldurmanızı öneririm.</li>
              <li>Bu şekilde tatlılar en az 6- 8 saat beklemelidir. Bu süre içinde yanmış şeker eriyecek sıvı hale gelecek ve kolayca ters dönecektir.</li>
              <li>Eğer borcama yaptıysanız kare keserek servis yapabilirsiniz.</li>
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header