import thumbnail from "../../assets/thumbnail.jpg";

const YtCard = () => {
  return (
    <div className='bg-white dark:bg-slate-900 text-black dark:text-white flex flex-col max-w-sm'>
      <div className='w-full rounded-lg'>
        <img src={thumbnail} alt='thumbnaail' className='w-full rounded-lg' />
      </div>
      <div className='text-black dark:text-white p-2 flex gap-4 my-4'>
        <div>
          <img
            src='https://randomuser.me/api/portraits/men/32.jpg'
                      alt='demo-user'
                      className="w-12 rounded-full"
          />
        </div>
              <div>
                  <h3 className="text-black dark:text-white text-2xl">Demo Title</h3>
                  <p className="text-slate-500">channel Name</p>
                  <div className="flex gap-3">
                      <span>
                          1k views
                      </span>
                      <span>.</span>
                      <span>
                          2 minutes aga
                      </span>
                  </div>

        </div>
      </div>
    </div>
  );
};

export default YtCard;
