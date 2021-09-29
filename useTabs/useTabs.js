export const useTabs = (initialTab, allTabs) => {
    // hooks는 최상위에서만 호출해야 합니다. 
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if (!allTabs || !Array.isArray(allTabs)) {
        return 0;
    }

    return {currentItem: allTabs[currentIndex], changeItem: setCurrentIndex};
};
