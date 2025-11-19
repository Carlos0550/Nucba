import { Box, Stack, Title, Text, Button, Group, Container, Image } from "@mantine/core"
import { Link } from "react-router-dom"
import logoUrl from "@/assets/logo.jpg"
import "./styles/landing.css"
function Landing() {
    return (
        <Box className="landing_hero">
            <Container size="lg">
                <Stack justify="center" align="center" gap="md" className="landing_content">
                    <Image src={logoUrl} alt="Zeus Suplementos" className="landing_logo" radius="md" />
                    <Title order={1}>Zeus Suplementos</Title>
                    <Text size="lg">Tu mejor aliado para una vida más saludable.</Text>
                    <Group justify="center" className="landing_actions">
                        <Button color="red" size="md" radius="md" component={Link} to="/app">Ver productos</Button>
                        <Button variant="light" color="yellow" size="md" radius="md" component={Link} to="/about">Conócenos</Button>
                    </Group>
                </Stack>
            </Container>
        </Box>
    )
}

export default Landing