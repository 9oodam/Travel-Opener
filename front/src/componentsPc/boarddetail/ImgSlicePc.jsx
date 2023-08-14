import React,{useState} from 'react'
import { ImgBox, ImgBoxContainer,Image,ImageBtnPre,ImageBtnNext } from './boarddetailPc.styled'

const images = [
    'data:image/jpeg;base64,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',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65flMGudllD-IqpUkZSOVkpi2sIxIx9M1EQ&usqp=CAU',
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEBMVFhUVFRUVFxUVFRUWFRUWFRUXFhUVFRcYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8QGisdHR0tLS0tKy0rKy0tLSstLS0tLS0tLS0rLSstLS0rKzctLS0tLSstLTctKys4LTctLi03K//AABEIAMIBAwMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAQhAAAgEBAwsDAQMKBQQDAAAAAAECEQMSIRMxQVFhcYGRobHwBMHRUgXh8QYVFiJjgpKTotJCcqPC4jJTYoMUI0P/xAAaAQEBAQEBAQEAAAAAAAAAAAABAAIDBAYF/8QAIBEBAAMBAAEFAQEAAAAAAAAAAAEREgITAyFBUWExcf/aAAwDAQACEQMRAD8A9WgjQ7A0fQPxy3QqJg3iQ5MFwa8Cpe6a6MoiphUiR1A2SRkx0zPui5FEpWRaTEbGLUouzBcKsDNWynkxXAqBsglkw3B6gqKI4COJRgoITugoUaFaFJtAoUuguDYToZIrkxlZlaRuhUSygOrMLMQ57gyszoVmOrMJ6apzxgNdLqzGumLNOXJGOlxMOlQBoG6GhlFugcRwikXE1C1010rCV0NClA0K0VIaIUhkgIKJrhSI9DNpyuIHEtJCNGoEotCtFWhbpplJo1Ctw1wbCSgG4VSNQLSLiC6WcRaDaJdNQahiIUCohHjELRFAeMB1EdGZlqCqAboyQyiZtpO6C6VcRXErJDDXTCkKhqPQDRphjIAUyFmQyFqaoGz0BQyYyYKwSCg0NQhYoaohipWzQt0cJJFwA4lmgNDbKNBrozQKEgaFY1DOIpNilHE10QnQKiUURlArKaQyiVjZlI2ZiemohKNmUjZFVAN0xPTcQRRRqFMmbJsLapO6ZxKXRJIrSdEYNHqAIRjZPQZwZ3r0zArDWXkgYlwNazUPRtbFM5rT05qO4ZniYct0NC2QYsoGrhgiQUgqDDdeohYINTUDQlYNmvGumukLG8MmLQKRKzIDQygxsmwNpUNQqrMZWRWnPdNdOnJbTKzQaNS5robp05M2SLSpzqBSMCuTHjZmZ6bjlOMEUUSsYFIpHOenWOUY2RRWQ8ppEpW5n3lr2hS6gSoRdqK7QsytQo0JJCObEaNxDM9C6azCXDCzb0agaMpBvHF6WikPwEvhvkPY7pqRN2aehByhr5RYmi5COo1xGvmqx92ZokrJakRnYnQ5PV0FaerobiZhzmIlySsgXDryQysDW3LxuLJmuM7lYhyReReOXDGA9zadLsRXYlpYmEbm0FCuTDkhsVKSQ2BRWIVYBcNREpqSNeK5EF0zcNVKaqOkPXYK4sraoraFlIbJazXUXsvdK6G4UvCOZWKgLgbgt4zTI+xqAYtAXSVjUALoRC1UG8jjVqHKmcu1uu+ZzOVWocqVC3TUZM5VaBypULdakMrQ4soHKFladuVDlTiVoFWgZWnblTZRHHfGvlladV9Byi1HLfCplkXLpvIDaOe+G+VK1sDVRG+a+VBaoLxHKAyhUlrwLxF2gL5Ulq7RXvJO0Fyg0lWgNEsoDKCqVATygMoSpWpqkcoDKEVhSWUNlCoUqYjlDCXyv56tdVn1+TS+27VZ4w6/I0vSWemyi98It8wx9PDPk0tt2Nd1dBrf447/AFL8/wBp+z6/IV9v2n7Pr/cdKsV9PNR+BrtcKPDYy3+DbmX23a/s+Nfky+3LX9l1/uOlwWOHEVLThtdVTsW/wbQf27a/suef+oy+3rb9l/VXlU6opvRypTsZQe3jTvQN/g2519u2v7Lr/cCX5QWqzuxW90/3HXR6uqSCovU+D+8t/g3Lkj+UNq8zsede0vKBX2/bV/8Ax5v+464wxxXOrf3cwuiz9K9i8n4PJLj/AEitddj/AFfI36Q21K//AFcpfJ1qMHoW8esFp6P2Df8Ai285/lNa67Hru+oH6UWmux/q+T1Kr6n5soakfq85F5I+luXmL8pLbOslTdP5D+kVvoyf8Fo/9x6LitfN5+gI2exc30qHlj6G+nmy/KS3X/b/AJdq/cH6R29K/qfy7T5PUdk9S5hyOyPGheWPo6l5L/KK31w/ly+QP7e9Rrj/AC38nrZFLRELsdkfOA+T8OpeL+kHqNcf5cvdgf276nWv5TPZdlnwXInKwWpfwqvYPL+HUvIf276nWv5a+Tfnv1Ov/SPYdnTQlwQfURjed1XY4UTrKi/zacceIeX8Opp4/wCePVbeFkjfnX1WuS/9cT17v+UDgtVPNa7F5FqXlL7R9Vrf8Fku7HfrPV63ysvk9Gi2cmLdjx3fBeQ6l5r9f6vS3ysfkH/z/V63ysfdnpJLNRPen8mu6kg8krUvNXrvVfU/9D5Md7jsj5wMXklalSKeOboai0teb0qGxedPqTnJKtVHonxxCZVHqtbpxfbAVWVcU32xNZyqszw0rT37jQjN/wDVBZtL+A1AoqSWdvlXpUpVNZsNq9hYpXv1opbarHmUdxKsqcX7BYyF1aMN6arurQaM1+L98RcrDOp8nX2LQdcaYb2MdR8LLYC0r/hr5pKQTf07kNNrNi9mHwVrKalHV2oOq6ua+8fJ8PNYsZxjqXP2K1kr4ecTOzpopy9jSlV4U3tv3BC0Sw7fgZnuBk2T8/VNkv8Ax9+xfBLM+FRYNPMpcmVwsJPHCnR/AHZPcUnPHGMnTl1HbWprfSnMLhYc8oPyvwK7OWzn8nQrWP8AiS5r2BG1g8yl1p39guPs4c+Z1x5pjue3m/hnVWL0rm39xnGmZYbv+Ix/pjhxydcy66OYKv6W6ajptKf+fBMakdMXm0or/WsuV7U+KYI2da0OjIx+pr94KsYrBNv99+we5w5FYPT53MvTvQlvX4HSrOKxVecuJrSSeONdzZHEOZ+me3i6ewX6VrO+1eg12SrjJV2JCKM1inT+ENQswVWS+r7jOx3lbk5aeeAmTns59sS3+HMJOyepmK5OXkvuMWxmEp+pWmVP3X3RGHrvojV7aL29ykpQ1cqfgGNKYrmqmOvUn7NDC2m86o90fctHDHDout0WNnXMsNdaCysKaFXa6mo6lULSbwUW9LvJtccTOzjXMt+d9gqxTz04JvuGNFgot/uqhX9rIRsY6GwqCeaq25vYpZ2c1p4NJDqGlzzaE2vxK1lKNlTNOTWlVa6sqpOmC5qXwUUJacFtkzOzp/iXXoytZSdo1nSrspHo84ctri/OB0Qb204e7C5aG/foU39rLmVqvortf4FLJr6UuEircVi+tQySks/KvuZufs5LRaHyT9gSs3nc+6GVFhTt3Y19LMuOD60LUfKyjOMXhKTb1Vb6BVnFYJ02fjnLJ7O3VcQVT0c6hFHKMIw38F3SCrNYte7T3DzkqmvhPULKas3u3fiTlY6a1K0b/FsR2bRie4OU8kvExsnt6hv01Du0e3gUd8mOU4wf1Pdg/YaTemnbkqGyuvqqDXlq6mtx9nKadMde7yoE3rdOhRbuZrq1ecg2ckdm9fv0BdWnmqexeMcMFy8qI01nXddy8lHBGqrMq739xJw1x5NnRi8xqS0hPqHKagtvP/kAtd19wl5oWHGrLTTlRdsTJpaFXZixFhn6v4zhrpx7I3PUOdL0TzuvmpoWckszpzIX+O5VGx2LfSvyZ8hpSNXprwZVJrM+P6z9sDnVolpfY2V11e/7i8kKl3hp7mvr6a+aiN6WhJcASvPO3QzPrR8LLoVfpXnApeS0x6fezkjZvQNZ2Owz5Z+jldz1SS5v2Ffp088vOIyilqb59Cl56Anq/wCmOU52C/F0XX2KWVnGOPyaS29V1KQs1rb69A1Rwykn5UdS0e1BLiWtmo9y3Go9T7ODxhsfNBdn5WoIDOW0zuGshv7e4J2a0U4lFJPxiSjjn7hpYTUKal5zCrOvlC6sE95z0pnDcNYKoVebiUdkqYVBlTZZvRxKe+VmiuFcGhVZacOw7tm8MFtKwTz0vYbVR9KlrkxynktOnUGMXmr18RpQbWMlujn40Bk66wjuPhrE/R4x0aeAKNZ8fNj2MKsvwoUjBavfoPk/Go9NC5XQ+QbOyq850yTWbGvAEY7+46aj00H6Xc/Nxi9xaugQtrxw+bjFvQ9+n7ir2vu30LZOqxeG8Kilm84s1NvHHKeba+QIxebsVolo9vvGi9SouRmTlLI6KU80sbIU/AaRkm/vMWcGVOO+nQeNBHZ00/ALOybxwptCejHKtNbrqWKS3UEm3XVuKygkvltGso10ozcnKCdXh0KxXE6HKMVRZ2JDcVtYJFYlsUJdbHg6exHLODz/AB1DFLZzKRsnLGjz0xdMdmgNxJaG9+ZBcnCbjoC7J00FEk2t1c2nUmO50TSTq8zbwT10Kpajhzwi64LxDQhJvFUHipulX5uWA6isdufY0FS1HBMnJaCU7OLdapbPOxW0s/kSPpm9HNlPNHBJKFaVb3Ki5v4CkloWGhtt88E+R0xsEl+supKUFXBN8yqWo4gjrWrS5D2dnV6XvKxjKmbDUUhBbtzGOZaqEnZLxBbKS8zCwhtOkQgp5gFIys0tYdwwAu1BKNPgIGVwaa95R/IAOvjMKeTGGrnj3DKJRxigqzRTLyRylCyT8fca5qGnBZq13ZkUjZZqmWsp0FUdjOlQWo1lF6Xh5mGlSLhTPj5m0htIyeMcFtw6F4YVNBayoxCDsytnYLV7D3UtHnsUbSwVVr1v4CahqOUckk8EkOojyhqVPYeKfmbmZvlrEpOGFKP5GhZ0alTNjiWlZN7MNIsotY1VdaqGuWo4K6vO1nw9ugIWaq6t76MvHFLDNn6vPxDKywVU8dOPj0A1HKeTo82Pi07DU5cOqzFlZSlhSWb6XozPMTo8zWkTR7ip7Vw3iyjrx789IdnalQWkufcNR8nKVNT54dx02s/nEzYyroz6vh6OIT1Hwcgp66+bQxWkFfqQqjjh8o1qxR7+/AMGmq8NRKLaeC5Gi1o1t0xTVdQ6VHm9Hi8qCxlnTq8FTNne/wAxA2/MTR19i+f6j3fFnFafmGnqG8aM9fwPsqDEy8xC0tGZmoNqi3NnUxnapGC1TyWsfNZeEVeSoYxQ8zSwzYDQCY6QlI6QQAYDDQKejiqsxjPX8ahC1zHX9n4qVda9jGOHTryrbZp01ruiTVHh9XsjGH0/4ZWksV5piCUV5wCYY/spNLv7M5JWsk8JNfqvM3oYTGpUO/1knRY55e1e41pmT2e7MYx0YNLNDbHHbnz6zl9P89wGM9NQo/juLJYPiYxcqSt4PzQJJYrcjGNfLMr6PNTNoRjHSRBFmlseGzANM3ABjlLZbP8A6nvDUxjpz/BJ3mZrJ4cjGNQBTMYxpl//2Q==',
  ];

  
const ImgSlicePc = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
    
      const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };
    
    return (
        <div>
        <ImgBoxContainer>
              <ImageBtnPre onClick={prevImage}>◀️</ImageBtnPre>
          <ImgBox style={{ transform: `translateX(-${currentImageIndex * (100/images.length)}%)` }}>
            {images.map((image, index) => (
              <Image key={index} src={image} style={{width:'400px'}} alt={`Image ${index + 1}`} />
            ))}
          </ImgBox>
        <ImageBtnNext onClick={nextImage}>▶️</ImageBtnNext>
        </ImgBoxContainer>
      </div>
    )
}

export default ImgSlicePc