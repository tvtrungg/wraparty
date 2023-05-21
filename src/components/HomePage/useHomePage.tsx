function useHomePage() {
    // forward to link
    const handleForwardToLink = () => {
        window.open('https://vimeo.com/wearewraparty', '_blank');
    };

    return {
        handleForwardToLink,
    };
}

export default useHomePage;
