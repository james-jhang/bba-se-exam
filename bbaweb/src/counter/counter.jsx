import { useState } from "react"
import { Button, Card, Metric, Grid, Col } from "@tremor/react";
import "./counter.css"

export default function Counter() {
    const [count, setCount] = useState(0);
    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        setCount(count - 1);
    }
    return (
        <Grid numItems={2} className="gap-2 max-w-screen-sm">
            <Col numColSpan={2}>
                <Card>
                    <Metric>
                        {count}
                    </Metric>
                </Card>
            </Col>
            <Button onClick={increase}>Increase</Button>
            <Button onClick={decrease}>Decrease</Button>
        </Grid>
    )
}