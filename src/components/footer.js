import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

export default function Footer(){
    return (
      <footer className="footer">
          <div>
              <h4 >KONTAKT</h4>
              <p className='ikonlinje'> <PhoneIcon/>49 85 40 33</p>
              <p className='ikonlinje'> <EmailIcon/>mail@fidoogfidoline</p>
              <h4 className='ikonlinje'> <LocationOnIcon/>ADRESSE</h4>
              <p>Hundevænget 5</p>
              <p> 3390 Hundested</p>
          </div>

          <div>
              <h4 className='ikonlinje'> <WatchLaterIcon/>ÅBNINGSTIDER</h4>
              <p>Mandag: Lukket</p>
              <p>Tirsdag - fredag: 7.00 - 17.00</p>
              <p>Lørdag: 10.00 - 15.00</p>
              <p>Søndag: 10.00 - 15.00</p>
            
          </div>

          <div>
              <h4>FØLG OS HER</h4>
              <FacebookIcon color="primary" sx={{ fontSize: 60 }}/>
              <InstagramIcon color="secondary" sx={{ fontSize: 60 }}/>
              <LinkedInIcon color="primary" sx={{ fontSize: 60 }}/>
          </div>

      </footer>
    )
}