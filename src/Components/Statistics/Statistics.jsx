import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import {getReadBookList} from "../../Utility/localStorage.js";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const books = useLoaderData();

    const [data, setData] = useState([]);

    useEffect(() => {
        const storedReadBookList = getReadBookList();
        if(books.length > 0){
            const bookReaded = books.filter(book => storedReadBookList.includes(book.bookId));
            setData(bookReaded);
        }
    }, [books]);

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF00FF', '#800080', '#FFFF00'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;