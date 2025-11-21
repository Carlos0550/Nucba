import { Box, Image, Stack, Title } from "@mantine/core"
import MainBanner from "@/assets/main_banner.jpg"
import "./styles/home.css"
import ProductCard from "@/Components/Generators/ProductCard"
function Home() {
  return (
    <Stack>
        <Box className="main-banner-container">
          <Image className="main-banner" src={MainBanner} alt="Banner principal" fit="cover"/>
        </Box>

        <Box p="md" h={"100vh"}>
          <Title order={2}>Nuestros mejores productos seleccionados para vos</Title>
          <ProductCard fromHome={true}/>
        </Box>
    </Stack>
  )
}

export default Home