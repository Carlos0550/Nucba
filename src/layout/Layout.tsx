import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Anchor, Stack, ActionIcon, Title } from '@mantine/core';
import { Link, Outlet } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { useMantineColorScheme } from '@mantine/core';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Layout() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const bg = 'var(--custom-bg)';
  const textColor = 'var(--custom-text)';
  const titleColor = 'var(--custom-title)';

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'lg', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header style={{ background: bg }}>
        <Group justify="space-between" px="md" h="100%">
          <Group>
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" hiddenFrom="lg" />
            <FiMenu size={20} style={{ display: 'none' }} />
            <Anchor component={Link} to="/" fw={700} style={{ color: titleColor }}>
              <Title order={3}>Zeus suplementos</Title>
            </Anchor>
          </Group>
          <Group>
            <ColorSchemeToggle />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md" style={{ background: bg }}>
        <Stack gap="sm" onClick={close}>
          <Anchor component={Link} to="/products" style={{ color: textColor }}>Productos</Anchor>
          <Anchor component={Link} to="/about" style={{ color: textColor }}>Sobre nosotros</Anchor>
          <Anchor component={Link} to="/faq" style={{ color: textColor }}>Preguntas frecuentes</Anchor>
          <Anchor component={Link} to="/contact" style={{ color: textColor }}>Contacto</Anchor>
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main style={{ background: bg }}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <ActionIcon
      variant="light"
      aria-label="Toggle color scheme"
      onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </ActionIcon>
  );
}