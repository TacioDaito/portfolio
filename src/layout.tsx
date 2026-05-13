import { ReactNode } from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'
import { useCardControl } from './hooks/useCardControl'

export default function RootLayout({ children }: { children: ReactNode }) {
	useCardControl();
	return (
		<TooltipProvider>{children}</TooltipProvider>
	)
}
