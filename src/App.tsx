import QuadrantGrid from './components/QuadrantGrid';

function App() {
  return (
    <div className="bg-dark-950 noise-overlay h-screen w-screen flex items-center justify-center">
        <QuadrantGrid>
          <QuadrantGrid.Card>
            <QuadrantGrid.Card.Content />
            <QuadrantGrid.Card.ExpandedOverlay />
          </QuadrantGrid.Card>
        </QuadrantGrid>
    </div>
  );
}

export default App;