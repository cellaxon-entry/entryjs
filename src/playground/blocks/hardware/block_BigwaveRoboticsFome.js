/* eslint-disable prettier/prettier */
/* eslint-disable brace-style */
/* eslint-disable max-len */
/* jshint esversion: 6 */
'use strict';

/***************************************************************************************
 *  장치 기본 정의
 ***************************************************************************************/

Entry.BigwaveRoboticsFome =
{
    id: ['50.1'],
    name: 'BigwaveRoboticsFome',
    url: 'https://www.myrobotsolution.com/',
    imageName: 'BigwaveRoboticsFome.png',
    title: {
        en: 'Bigwave Robotics Fome',
        ko: '빅웨이브로보틱스 포미',
    },

    // 엔트리 정지시 하드웨어 초기화 로직
    setZero() {
        // 초기화
        Entry.BigwaveRoboticsBase.transferBufferClear();

        // 한 번에 명령을 전송하면 hw까지 제대로 전달되지 않는 경우가 있어
        // 명령을 각각 분리하여 전송하게 함(2017.01.03)
        for (let i = 0; i < 1; i++) {
            /*
            const jsonBody = { "dataType": "COMMAND", "param": { "commandType": "STOP" } };
            Entry.BigwaveRoboticsBase.sendJson(script, jsonBody);
            // */
        }
    },
};


/***************************************************************************************
 *  언어 적용
 ***************************************************************************************/
Entry.BigwaveRoboticsFome.setLanguage = function () {
    return {
        ko: {
            // ko.js에 작성하던 내용
            Blocks: {
                // 정보창
                monitorRemainDataToTransfer: '전송 예정 데이터',

                // 일반 블럭
                commonForward: '전진',
                commonBack: '후진',
            },

            template: {
                BigwaveRoboticsFomeStop: '제자리에 멈추기 %1',
                BigwaveRoboticsFomeMoveForward: '앞으로 %1 만큼 움직이기 %2',
                BigwaveRoboticsFomeMoveBack: '뒤로 %1 만큼 움직이기 %2',
                BigwaveRoboticsFomeTurnLeft: '왼쪽으로 %1 만큼 회전하기 %2',
                BigwaveRoboticsFomeTurnRight: '오른쪽으로 %1 만큼 회전하기 %2',
                BigwaveRoboticsFomeHeadUp: '머리 들기 %1',
                BigwaveRoboticsFomeHeadForward: '머리 앞으로 %1',
                BigwaveRoboticsFomeHeadDown: '머리 아래로 %1',
            },

            Helper: {
                BigwaveRoboticsFomeStop: "<br>이동을 멈춥니다.",
            }
        },

        en: {
            // ko.js에 작성하던 내용
            Blocks: {
                // 정보창
                monitorRemainDataToTransfer: '전송 예정 데이터',

                // 일반 블럭
                commonForward: 'Go Forward',
                commonBack: 'Go Back',
            },

            template: {
                BigwaveRoboticsFomeStop: '제자리에 멈추기 %1',
                BigwaveRoboticsFomeMoveForward: '앞으로 %1 만큼 움직이기 %2',
                BigwaveRoboticsFomeMoveBack: '뒤로 %1 만큼 움직이기 %2',
                BigwaveRoboticsFomeTurnLeft: '왼쪽으로 %1 만큼 회전하기 %2',
                BigwaveRoboticsFomeTurnRight: '오른쪽으로 %1 만큼 회전하기 %2',
                BigwaveRoboticsFomeHeadUp: '머리 들기 %1',
                BigwaveRoboticsFomeHeadForward: '머리 앞으로 %1',
                BigwaveRoboticsFomeHeadDown: '머리 아래로 %1',
            },

            Helper: {
                BigwaveRoboticsFomeStop: "<br>Stop.",
            }
        },
    };
};


// Entry 좌측 하단 하드웨어 모니터 화면에 표시하는 속성
// listPorts와 ports 두 곳 동시에 동일한 속성을 표시할 수는 없음
Entry.BigwaveRoboticsFome.monitorTemplate = function () {
    return {
        imgPath: "hw/BigwaveRoboticsFome.png",  // 배경 이미지
        width: 500,     // 이미지의 폭
        height: 500,    // 이미지의 높이

        // 모니터 화면 상단에 차례대로 나열하는 값
        listPorts: {},

        // 모니터 화면 지정 위치와 선으로 연결하여 표시하는 값
        ports: {},

        mode: 'both',   // 표시 모드
    };
};


/***************************************************************************************
 *  엔트리에 등록할 블록들의 블록명(다른 장치의 블록 이름과 달라야 함)
 ***************************************************************************************/
Entry.BigwaveRoboticsFome.blockMenuBlocks = [
    'BigwaveRoboticsFomeStop',
    'BigwaveRoboticsFomeMoveForward',
    'BigwaveRoboticsFomeMoveBack',
    'BigwaveRoboticsFomeTurnLeft',
    'BigwaveRoboticsFomeTurnRight',
    'BigwaveRoboticsFomeHeadUp',
    'BigwaveRoboticsFomeHeadForward',
    'BigwaveRoboticsFomeHeadDown',
];


/***************************************************************************************
 *  엔트리 블록 정의
 ***************************************************************************************/
Entry.BigwaveRoboticsFome.getBlocks = function () {
    return {
        BigwaveRoboticsFomeStop: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic',
            statements: [],
            params: [{ type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 }],
            events: {},
            def: {
                params: [null],
                type: 'BigwaveRoboticsFomeStop',
            },
            paramsKeyMap: {},
            class: 'command_stop',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script) {
                const jsonBody = { "dataType": "COMMAND", "param": { "commandType": "STOP" } };
                return Entry.BigwaveRoboticsBase.sendJson(script, jsonBody);
            },
            syntax: {
                js: [],
                py: [],
            },
        },

        BigwaveRoboticsFomeMoveForward: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic',
            statements: [],
            params: [
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def: {
                params: [{ type: 'number', params: ['1'] }, null],
                type: 'BigwaveRoboticsFomeMoveForward',
            },
            paramsKeyMap: {
                VALUE: 0,
            },
            class: 'command_move',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script) {0
                const value = script.getNumberValue('VALUE');
                const jsonBody = { "dataType": "COMMAND", "param": { "commandType": "MOVE_FORWARD", "distance": value } };
                return Entry.BigwaveRoboticsBase.sendJson(script, jsonBody);
            },
            syntax: {
                js: [],
                py: [],
            },
        },

        BigwaveRoboticsFomeMoveBack: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic',
            statements: [],
            params: [
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def: {
                params: [{ type: 'number', params: ['1'] }, null],
                type: 'BigwaveRoboticsFomeMoveBack',
            },
            paramsKeyMap: {
                VALUE: 0,
            },
            class: 'command_move',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script) {0
                const value = script.getNumberValue('VALUE');
                const jsonBody = { "dataType": "COMMAND", "param": { "commandType": "MOVE_BACK", "distance": value } };
                return Entry.BigwaveRoboticsBase.sendJson(script, jsonBody);
            },
            syntax: {
                js: [],
                py: [],
            },
        },

        BigwaveRoboticsFomeTurnLeft: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic',
            statements: [],
            params: [
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def: {
                params: [{ type: 'number', params: ['90'] }, null],
                type: 'BigwaveRoboticsFomeTurnLeft',
            },
            paramsKeyMap: {
                VALUE: 0,
            },
            class: 'command_turn',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script) {0
                const value = script.getNumberValue('VALUE');
                const jsonBody = { "dataType": "COMMAND", "param": { "commandType": "TURN_LEFT", "angle": value } };
                return Entry.BigwaveRoboticsBase.sendJson(script, jsonBody);
            },
            syntax: {
                js: [],
                py: [],
            },
        },

        BigwaveRoboticsFomeTurnRight: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic',
            statements: [],
            params: [
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def: {
                params: [{ type: 'number', params: ['90'] }, null],
                type: 'BigwaveRoboticsFomeTurnRight',
            },
            paramsKeyMap: {
                VALUE: 0,
            },
            class: 'command_turn',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script) {0
                const value = script.getNumberValue('VALUE');
                const jsonBody = { "dataType": "COMMAND", "param": { "commandType": "TURN_RIGHT", "angle": value } };
                return Entry.BigwaveRoboticsBase.sendJson(script, jsonBody);
            },
            syntax: {
                js: [],
                py: [],
            },
        },

        BigwaveRoboticsFomeHeadUp: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic',
            statements: [],
            params: [{ type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 }],
            events: {},
            def: {
                params: [null],
                type: 'BigwaveRoboticsFomeHeadUp',
            },
            paramsKeyMap: {},
            class: 'command_head',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script) {0
                const value = script.getNumberValue('VALUE');
                const jsonBody = { "dataType": "COMMAND", "param": { "commandType": "HEAD_UP" } };
                return Entry.BigwaveRoboticsBase.sendJson(script, jsonBody);
            },
            syntax: {
                js: [],
                py: [],
            },
        },

        BigwaveRoboticsFomeHeadForward: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic',
            statements: [],
            params: [{ type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 }],
            events: {},
            def: {
                params: [null],
                type: 'BigwaveRoboticsFomeHeadForward',
            },
            paramsKeyMap: {},
            class: 'command_head',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script) {0
                const value = script.getNumberValue('VALUE');
                const jsonBody = { "dataType": "COMMAND", "param": { "commandType": "HEAD_FORWARD" } };
                return Entry.BigwaveRoboticsBase.sendJson(script, jsonBody);
            },
            syntax: {
                js: [],
                py: [],
            },
        },

        BigwaveRoboticsFomeHeadDown: {
            color: EntryStatic.colorSet.block.default.HARDWARE,
            outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton: 'basic',
            statements: [],
            params: [{ type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 }],
            events: {},
            def: {
                params: [null],
                type: 'BigwaveRoboticsFomeHeadDown',
            },
            paramsKeyMap: {},
            class: 'command_head',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script) {0
                const value = script.getNumberValue('VALUE');
                const jsonBody = { "dataType": "COMMAND", "param": { "commandType": "HEAD_DOWN" } };
                return Entry.BigwaveRoboticsBase.sendJson(script, jsonBody);
            },
            syntax: {
                js: [],
                py: [],
            },
        },

    };
};


module.exports = Entry.BigwaveRoboticsFome;

