// import { TooltipProvider } from '@/components/ui/tooltip'
import { ReactNode } from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='pt-BR'>
			<body>
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	)
}
