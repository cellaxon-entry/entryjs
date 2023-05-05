/* eslint-disable prettier/prettier */
/* eslint-disable brace-style */
/* eslint-disable max-len */
/* jshint esversion: 6 */
'use strict';


/***************************************************************************************
 *  장치 기본 정의
 ***************************************************************************************/

Entry.BigwaveRoboticsBase = 
{
    /***************************************************************************************
     *  시간 지연 함수
     ***************************************************************************************/

    // 시간 지연
    checkFinish(script, ms)
    {
        const _ms = this.fit(0, ms, 60000);

        if (!script.isStart)
        {
            script.isStart  = true;
            script.timeFlag = 1;

            const fps       = Entry.FPS || 60;
            const timeValue = (60 / fps) * _ms;

            setTimeout(() => {
                script.timeFlag = 0;
            }, timeValue);

            return 'Start';
        }
        else if (script.timeFlag == 1)
        {
            return 'Running';
        }
        else
        {
            delete script.timeFlag;
            delete script.isStart;
            Entry.engine.isContinue = false;
            return 'Finish';
        }
    },


    /***************************************************************************************
     *  기능 함수
     ***************************************************************************************/

    transferBufferClear()
    {
        Entry.hw.sendQueue.bufferClear = 0;
        Entry.hw.update();
        delete Entry.hw.sendQueue.buffer_clear;
    },


    fit(min, value, max)
    {
        return Math.max(Math.min(value, max), min);
    },


    /***************************************************************************************
     *  기능
     ***************************************************************************************/

    // 데이터 읽기
    getData(device)
    {
        return Entry.hw.portData[device];
    },



    /***************************************************************************************
     *  데이터 전송 함수 (Entry -> Hardware)
     ***************************************************************************************/

    // -- Message -----------------------------------------------------------------------------
    sendJson(script, jsonBody, timeDelay = 32)
    {
        switch (this.checkFinish(script, timeDelay))
        {
            case 'Start': 
                {
                    console.log(jsonBody);

                    // 전송
                    Entry.hw.sendQueue.jsonBody = jsonBody;
            
                    Entry.hw.update();
            
                    delete Entry.hw.sendQueue.jsonBody;
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    }
};


module.exports = Entry.BigwaveRoboticsBase;

