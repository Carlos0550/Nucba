import { useAppContext } from "@/Context/AppContext"
import { useMemo } from "react"
import { AspectRatio, Badge, Button, Card, Grid, Group, Image, Text } from "@mantine/core"

type Props = {
  fromHome?: boolean //simula productos en oferta o productos del momento...
}

function ProductCard({fromHome = false}: Props) {
    const { products } = useAppContext()
    const pseudoScore = (id: number) => ((id * 9301 + 49297) % 233280) / 233280 //aleatoriedad deterministica porque el lint no permite usar Math.random
    const productsToShow = useMemo(() => {
      if (!Array.isArray(products)) return []
      const ordered = [...products].sort((a, b) => pseudoScore(a.id) - pseudoScore(b.id))
      return fromHome ? ordered.slice(0, Math.min(8, ordered.length)) : ordered
    }, [products, fromHome])
  return (
    <Grid justify="center" gutter="lg" p={10}>
      {Array.isArray(productsToShow) && productsToShow.map((product) => {
        const inStock = (product.stock ?? 0) > 0;
        return (
          <Grid.Col key={product.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <Card shadow="sm" padding="md" radius="md" withBorder style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Card.Section>
                <AspectRatio ratio={4 / 3}>
                  <Image src={product.image} alt={product.name} fit="cover" />
                </AspectRatio>
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={600} lineClamp={2}>{product.name}</Text>
                <Badge color={inStock ? "green" : "red"}>{inStock ? "En stock" : "Sin stock"}</Badge>
              </Group>

              <Button fullWidth mt="auto" radius="md">
                Ver producto
              </Button>
            </Card>
          </Grid.Col>
        );
      })}
    </Grid>
  )
}

export default ProductCard