/**
 *
 * This file is auto-generated. Do not edit manually: changes may be erased.
 * Generated by Aqua compiler: https://github.com/fluencelabs/aqua/.
 * If you find any bugs, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * Aqua version: 0.7.4-332
 *
 */
import { Fluence, FluencePeer } from '@fluencelabs/fluence';
import {
    CallParams,
    callFunction,
    registerService,
} from '@fluencelabs/fluence/dist/internal/compilerSupport/v3';


// Services

// Functions
 

export function get_live_events(
    config?: {ttl?: number}
): Promise<{ end_date: string; err_msg: string; event_type: string; id: number; logo: string; start_date: string; status: number; success: boolean; title: string; }[]>;

export function get_live_events(
    peer: FluencePeer,
    config?: {ttl?: number}
): Promise<{ end_date: string; err_msg: string; event_type: string; id: number; logo: string; start_date: string; status: number; success: boolean; title: string; }[]>;

export function get_live_events(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call "12D3KooWFEwNWcHqi9rtsmDhsYcDbRUCDXH84RC4FW6UfsFWaoHi" ("academy_backend" "get_live_events") [] res)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction(
        args,
        {
    "functionName" : "get_live_events",
    "arrow" : {
        "tag" : "arrow",
        "domain" : {
            "tag" : "labeledProduct",
            "fields" : {
                
            }
        },
        "codomain" : {
            "tag" : "unlabeledProduct",
            "items" : [
                {
                    "tag" : "array",
                    "type" : {
                        "tag" : "struct",
                        "name" : "Event",
                        "fields" : {
                            "success" : {
                                "tag" : "scalar",
                                "name" : "bool"
                            },
                            "start_date" : {
                                "tag" : "scalar",
                                "name" : "string"
                            },
                            "err_msg" : {
                                "tag" : "scalar",
                                "name" : "string"
                            },
                            "title" : {
                                "tag" : "scalar",
                                "name" : "string"
                            },
                            "logo" : {
                                "tag" : "scalar",
                                "name" : "string"
                            },
                            "id" : {
                                "tag" : "scalar",
                                "name" : "i64"
                            },
                            "end_date" : {
                                "tag" : "scalar",
                                "name" : "string"
                            },
                            "event_type" : {
                                "tag" : "scalar",
                                "name" : "string"
                            },
                            "status" : {
                                "tag" : "scalar",
                                "name" : "i64"
                            }
                        }
                    }
                }
            ]
        }
    },
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}

 
export type Get_eventResult = { end_date: string; err_msg: string; event_type: string; id: number; logo: string; start_date: string; status: number; success: boolean; title: string; }
export function get_event(
    id: number,
    config?: {ttl?: number}
): Promise<Get_eventResult>;

export function get_event(
    peer: FluencePeer,
    id: number,
    config?: {ttl?: number}
): Promise<Get_eventResult>;

export function get_event(...args: any) {

    let script = `
                    (xor
                     (seq
                      (seq
                       (seq
                        (seq
                         (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
                         (call %init_peer_id% ("getDataSrv" "id") [] id)
                        )
                        (call -relay- ("op" "noop") [])
                       )
                       (xor
                        (seq
                         (call "12D3KooWFEwNWcHqi9rtsmDhsYcDbRUCDXH84RC4FW6UfsFWaoHi" ("academy_backend" "get_event") [id] res)
                         (call -relay- ("op" "noop") [])
                        )
                        (seq
                         (call -relay- ("op" "noop") [])
                         (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 1])
                        )
                       )
                      )
                      (xor
                       (call %init_peer_id% ("callbackSrv" "response") [res])
                       (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 2])
                      )
                     )
                     (call %init_peer_id% ("errorHandlingSrv" "error") [%last_error% 3])
                    )
    `
    return callFunction(
        args,
        {
    "functionName" : "get_event",
    "arrow" : {
        "tag" : "arrow",
        "domain" : {
            "tag" : "labeledProduct",
            "fields" : {
                "id" : {
                    "tag" : "scalar",
                    "name" : "i64"
                }
            }
        },
        "codomain" : {
            "tag" : "unlabeledProduct",
            "items" : [
                {
                    "tag" : "struct",
                    "name" : "Event",
                    "fields" : {
                        "success" : {
                            "tag" : "scalar",
                            "name" : "bool"
                        },
                        "start_date" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "err_msg" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "title" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "logo" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "id" : {
                            "tag" : "scalar",
                            "name" : "i64"
                        },
                        "end_date" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "event_type" : {
                            "tag" : "scalar",
                            "name" : "string"
                        },
                        "status" : {
                            "tag" : "scalar",
                            "name" : "i64"
                        }
                    }
                }
            ]
        }
    },
    "names" : {
        "relay" : "-relay-",
        "getDataSrv" : "getDataSrv",
        "callbackSrv" : "callbackSrv",
        "responseSrv" : "callbackSrv",
        "responseFnName" : "response",
        "errorHandlingSrv" : "errorHandlingSrv",
        "errorFnName" : "error"
    }
},
        script
    )
}
