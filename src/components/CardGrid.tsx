
import OutsideClickHandler from 'react-outside-click-handler';
import { useCardControl, CardControlContext } from '../hooks/useCardControl';
import { CardMapper } from './CardMapper';

export const CardGrid = () => {

	const { expandedCard, setExpandedCard, isExpanded, isOtherCardExpanded
		, handleKeyPressExpand } = useCardControl();

	return (
		<CardControlContext.Provider value={{
			expandedCard, setExpandedCard
			, isExpanded, isOtherCardExpanded, handleKeyPressExpand
		}}>
			<OutsideClickHandler onOutsideClick={() => setExpandedCard(null)}>
				<div className="flex items-center justify-center w-full h-full">
					<div className="grid grid-cols-2 grid-rows-2 items-center
						rounded-4xl aspect-[3.23/2] w-[50vw] bg-surface noise shadow-md/50">
						<CardMapper />
					</div>
				</div>
			</OutsideClickHandler>
		</CardControlContext.Provider>
	);

}