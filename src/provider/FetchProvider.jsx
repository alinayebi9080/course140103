import { useToasts } from "react-toast-notifications";
import { Provider } from "use-http";

const FetchProvider = ({ children }) => {

    const { addToast } = useToasts()

    const options = {
        cachePolicy: "no-cache",
        interceptors: {
            request: async ({ options, url, path, route }) => {

                // options.headers.Authorization = `Bearer ${token}`
                return options
            },
            // every time we make an http request, before getting the response back, this will run
            response: async ({ response }) => {
                if (!response.ok) {
                    addToast(response?.data?.message, { appearance: 'error', autoDismiss: true })
                }
                return response
            }
        }
    }

    return (
        <Provider options={options}>
            {children}
        </Provider>
    );
}

export default FetchProvider;