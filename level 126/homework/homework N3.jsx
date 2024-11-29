const image = {
  src: "https://images.pexels.com/photos/1601071/pexels-photo-1601071.jpeg",
  alt: "Mountain Image "
}

function DynamicImage(){
  return (
    <img src={image.src} alt={image.alt} />
  )
}