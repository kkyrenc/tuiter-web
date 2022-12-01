import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk, deleteTuitThunk} from "../../services/tuits-thunks";


const TuitItem = (
    {
        tuit = {
            "_id": "234",
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={60} className="float-end rounded-circle mt-1" src={`${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div><span className="fw-bolder">{tuit.userName}</span> {tuit.handle} · {tuit.time}</div>
                    <div className="">{tuit.tuit}</div>
                    <span className="row mt-2 ms-2">
                      <div className="wd-post-icon col-3">
                        <i class=" fa-regular fa-message fa-1x"></i> {tuit.replies}
                      </div>
                        <div class=" wd-post-icon col-3" >
                        <i className="fa-regular fa-share-from-square fa-1x"></i> {tuit.retuits}
                        </div>
                      <div className="wd-post-icon col-3 " >
                          <i onClick={() => dispatch(updateTuitThunk({
                                                                         ...tuit,
                                                                         likes: tuit.liked === false?tuit.likes + 1: tuit.likes - 1,
                                                                         liked: !tuit.liked,
                                                                     }))} className= {`bi ${tuit.liked === true?'bi-heart-fill':'bi-heart'} me-2 ${tuit.liked === true?'text-danger':''}`}></i>{tuit.likes}
                      </div>
                      <div class=" wd-post-icon col-3" >
                        <i className="fa fa-arrow-up-from-bracket fa-1x"></i>
                      </div>
                    </span>
                </div>
                <div>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>

            </div>
        </li>
    );
};
export default TuitItem;