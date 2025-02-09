import './App.css'
import NavBar from "@/components/site-ui/NavBar.tsx";
import ThemeProvider from "@/components/context-providers/ThemeProvider.tsx";

import '@xyflow/react/dist/style.css';
import {
    addEdge,
    Background,
    BackgroundVariant, Connection,
    Controls,
    MiniMap, ProOptions,
    ReactFlow,
    useEdgesState,
    useNodesState
} from "@xyflow/react";
import {useCallback} from "react";

const initialNodes = [
    {id: '1', position: {x: 0, y: 0}, data: {label: '1'}},
    {id: '2', position: {x: 0, y: 100}, data: {label: '2'}},
];
const initialEdges = [{id: 'e1-2', source: '1', target: '2'}];

function App() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
    const attribution: ProOptions = {hideAttribution: true};

    const onConnect = useCallback(
        (params: Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <ThemeProvider>
            <div className="flex flex-col w-screen h-screen items-center">
                <NavBar/>
                <div className="flex-1 w-full">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        proOptions={attribution}
                        colorMode={"light"}
                        fitView
                    >
                        <Controls position={"top-left"} className="border-border border-2 shadow"/>
                        <MiniMap position={"top-right"} className="border-border border-2 shadow-nav"/>
                        <Background variant={BackgroundVariant.Dots} gap={15} size={2}/>
                    </ReactFlow>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App

// TODO: Set up theme swtiching for reactflow component
