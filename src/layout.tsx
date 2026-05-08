// import { TooltipProvider } from '@/components/ui/tooltip'
import { ReactNode } from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<TooltipProvider>{children}</TooltipProvider>
	)
}
