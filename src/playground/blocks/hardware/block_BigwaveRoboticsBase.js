'use strict';


/***************************************************************************************
 *  장치 기본 정의
 ***************************************************************************************/

Entry.BigwaveRoboticsBase =
{
    /***************************************************************************************
     *  기능 함수
     ***************************************************************************************/
    fit(min, value, max) {
        return Math.max(Math.min(value, max), min);
    },

    // 데이터 읽기
    getData(device) {
        return Entry.hw.portData[device];
    },


    /***************************************************************************************
     *  데이터 전송 함수 (Entry -> Hardware)
     ***************************************************************************************/

    // -- Message -----------------------------------------------------------------------------
    sendJson(script, jsonBody, flagSync = false, timeOut = 60000) {
        const motion = this.getData('motion');

        if (!script.sequence) {
            script.sequence = 'Start';
        }

        switch (script.sequence) {
            case 'Start':
                {
                    console.log('Block - Start');
                    // 비동기 실행 시 32ms 후 바로 다음 블럭 실행
                    if (flagSync == false) {
                        timeOut = 32;
                    }

                    const ms = this.fit(0, timeOut, 300000);
                    const fps = Entry.FPS || 60;
                    const timeValue = (60 / fps) * ms;

                    // 시간 초과 시 블럭 실행 종료
                    setTimeout(() => {
                        script.sequence = 'Finish';
                    }, timeValue);

                    // 명령 전송
                    {
                        console.log(JSON.stringify(jsonBody));
                        Entry.hw.sendQueue.jsonBody = jsonBody;
                        Entry.hw.update();
                        delete Entry.hw.sendQueue.jsonBody;
                    }

                    console.log('Block - CheckMotionStart');
                    script.sequence = 'CheckMotionStart';
                }
                return script;

            case 'CheckMotionStart':
                {
                    if (flagSync &&
                        motion !== undefined &&
                        motion != 'Ready') {
                        console.log('Block - CheckMotionFinish');
                        script.sequence = 'CheckMotionFinish';
                    }
                }
                return script;

            case 'CheckMotionFinish':
                {
                    if (flagSync &&
                        motion !== undefined &&
                        motion == 'Ready') {
                        script.sequence = 'Finish';
                    }
                }
                return script;

            default: // 'Finish'
                {
                    console.log('Block - Finish');
                    delete script.sequence;
                    Entry.engine.isContinue = false;
                    return script.callReturn();
                }
        }
    }
};


module.exports = Entry.BigwaveRoboticsBase;

