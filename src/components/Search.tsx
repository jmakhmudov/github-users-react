import Search from "antd/es/input/Search";

interface SearchProps {
    setSearchUser: React.Dispatch<React.SetStateAction<string>>;
}

const SearchComponent: React.FC<SearchProps> = ({ setSearchUser }) => {
    const onSearch = (value: string) => {
        setSearchUser(value);
    };

    return (
        <>
            <Search
                addonBefore="@"
                placeholder="Input GitHub login"
                allowClear
                onSearch={onSearch}
                style={{ width: 304 }}
            />
        </>
    );
}

export default SearchComponent;