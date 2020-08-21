import React, { useState } from 'react';
import { Controlled as CodeMirror} from 'react-codemirror2';
import { Container, Row, Col, Button } from 'reactstrap';

import './App.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/tomorrow-night-eighties.css'
import 'codemirror/mode/javascript/javascript.js'

function App() {

    const [code, setCode] = useState("");
    const [cursor, setCursor] = useState({
        ch: 0,
        line: 0
    })
    const [consola, setConsola] = useState("> valor de x: 2");

    return (
        <Container fluid className="App">
            <Row>
                <Col sm="8" className="editor">
                    <CodeMirror 
                        value={code}
                        options={{
                            theme: 'material',
                            mode: 'javascript',
                            lineNumbers: true,
                            indentUnit: 4
                        }}
                        onBeforeChange={(editor, data, value) => {
                            setCode(value)
                        }}
                        onChange={(editor, data, value) => {
                        }}
                        onCursorActivity={(editor) => {
                            setCursor(editor.getCursor())
                        }}
                    />
                    <div className="ColRow">
                        col: {cursor.ch} line: {cursor.line + 1}
                    </div>
                </Col>
                <Col>
                    <h2>Reportes</h2>

                    <Row>
                        <Col>
                            <Button block>Traducir</Button>
                        </Col>
                        <Col>
                            <Button block>Ejecutar</Button>
                        </Col>
                    </Row>
                    
                    <div className="reportes">
                        
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    Consola
                    <div className="consola">
                        <CodeMirror 
                            value={consola}
                            options={{
                                readOnly: true,
                                theme: 'material'
                            }}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
