import type { AppProps } from 'next/app'
import Link from 'next/link'
import { AppShell, Header, Navbar, Text, Stack } from '@mantine/core'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 220 }} p="xs">
          <Stack>
            <Link href="/">投稿一覧</Link>
            <Link href="/sample">固定サンプルページ</Link>
            <Link href="/news">カスタム投稿一覧</Link>
          </Stack>
        </Navbar>
      }
      header={<Header height={60} p="xs"><Text size={28} fw="bold">WP-RestAPI to NextJS</Text></Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Component {...pageProps} />
    </AppShell>
  )
}
